from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
from models import (
    BookingRequest,
    BookingRequestCreate,
    ContactMessage,
    ContactMessageCreate
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Booking Request Endpoints
@api_router.post("/bookings", response_model=BookingRequest)
async def create_booking_request(booking: BookingRequestCreate):
    """Create a new booking request"""
    try:
        booking_obj = BookingRequest(**booking.model_dump())
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = booking_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.booking_requests.insert_one(doc)
        logger.info(f"Booking request created: {booking_obj.id}")
        
        return booking_obj
    except Exception as e:
        logger.error(f"Error creating booking request: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create booking request")


@api_router.get("/bookings", response_model=List[BookingRequest])
async def get_booking_requests():
    """Retrieve all booking requests"""
    try:
        bookings = await db.booking_requests.find({}, {"_id": 0}).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for booking in bookings:
            if isinstance(booking['timestamp'], str):
                booking['timestamp'] = datetime.fromisoformat(booking['timestamp'])
        
        return bookings
    except Exception as e:
        logger.error(f"Error retrieving booking requests: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve booking requests")


# Contact Message Endpoints
@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(message: ContactMessageCreate):
    """Create a new contact message"""
    try:
        message_obj = ContactMessage(**message.model_dump())
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = message_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.contact_messages.insert_one(doc)
        logger.info(f"Contact message created: {message_obj.id}")
        
        return message_obj
    except Exception as e:
        logger.error(f"Error creating contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create contact message")


@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Retrieve all contact messages"""
    try:
        messages = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for message in messages:
            if isinstance(message['timestamp'], str):
                message['timestamp'] = datetime.fromisoformat(message['timestamp'])
        
        return messages
    except Exception as e:
        logger.error(f"Error retrieving contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve contact messages")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()