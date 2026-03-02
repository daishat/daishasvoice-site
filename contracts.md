# API Contracts & Integration Plan

## Overview
This document outlines the backend API structure and integration points for the D'Aisha Voice portfolio website.

---

## Current Mock Data (Frontend-Only)

### Location: `/app/frontend/src/utils/mock.js`

### Mock Functions:
1. **saveBookingRequest(bookingData)** - Simulates saving booking requests
2. **saveContactMessage(messageData)** - Simulates saving contact messages
3. **getBookingRequests()** - Returns all booking requests
4. **getContactMessages()** - Returns all contact messages

### Data Structures:

#### Booking Request:
```javascript
{
  id: Date.now(),
  name: String,
  company: String (optional),
  email: String,
  projectType: String,
  budget: String (optional),
  deadline: String (optional),
  message: String,
  timestamp: ISO String,
  status: 'pending'
}
```

#### Contact Message:
```javascript
{
  id: Date.now(),
  name: String,
  email: String,
  subject: String,
  message: String,
  timestamp: ISO String,
  status: 'unread'
}
```

---

## Backend Implementation Plan

### MongoDB Models

#### 1. BookingRequest Model
**Collection:** `booking_requests`

```python
{
  "_id": ObjectId,
  "name": String (required),
  "company": String (optional),
  "email": String (required),
  "projectType": String (required),
  "budget": String (optional),
  "deadline": String (optional),
  "message": String (required),
  "timestamp": DateTime (default: now),
  "status": String (default: "pending")
}
```

#### 2. ContactMessage Model
**Collection:** `contact_messages`

```python
{
  "_id": ObjectId,
  "name": String (required),
  "email": String (required),
  "subject": String (required),
  "message": String (required),
  "timestamp": DateTime (default: now),
  "status": String (default: "unread")
}
```

---

## API Endpoints

### Base URL: `${REACT_APP_BACKEND_URL}/api`

### 1. Booking Requests

#### POST `/api/bookings`
Create a new booking request

**Request Body:**
```json
{
  "name": "John Doe",
  "company": "ABC Studios",
  "email": "john@example.com",
  "projectType": "commercial",
  "budget": "1000-2500",
  "deadline": "2025-04-01",
  "message": "Need voice over for commercial..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "company": "ABC Studios",
    "email": "john@example.com",
    "projectType": "commercial",
    "budget": "1000-2500",
    "deadline": "2025-04-01",
    "message": "Need voice over for commercial...",
    "timestamp": "2025-03-02T16:30:00.000Z",
    "status": "pending"
  }
}
```

#### GET `/api/bookings`
Retrieve all booking requests (for future admin dashboard)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      ...
    }
  ]
}
```

---

### 2. Contact Messages

#### POST `/api/contact`
Create a new contact message

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Question about services",
  "message": "I'd like to know more about..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "subject": "Question about services",
    "message": "I'd like to know more about...",
    "timestamp": "2025-03-02T16:35:00.000Z",
    "status": "unread"
  }
}
```

#### GET `/api/contact`
Retrieve all contact messages (for future admin dashboard)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439012",
      "name": "Jane Smith",
      ...
    }
  ]
}
```

---

## Frontend Integration Points

### Files to Update:

1. **`/app/frontend/src/pages/BookMe.jsx`**
   - Replace `saveBookingRequest` from `mock.js` with API call
   - Update import and function call to use axios

2. **`/app/frontend/src/pages/Contact.jsx`**
   - Replace `saveContactMessage` from `mock.js` with API call
   - Update import and function call to use axios

### Integration Steps:

1. Create new API utility file: `/app/frontend/src/utils/api.js`
2. Add axios functions for booking and contact submissions
3. Update BookMe.jsx to use real API
4. Update Contact.jsx to use real API
5. Remove mock.js imports
6. Add proper error handling

---

## Error Handling

### Backend:
- Validate all required fields
- Return 400 for validation errors
- Return 500 for server errors
- Log all errors

### Frontend:
- Show user-friendly error messages
- Keep form data on error
- Add retry capability
- Show success confirmation

---

## Testing Checklist

### Backend:
- [ ] Booking request creation works
- [ ] Contact message creation works
- [ ] Data persists to MongoDB
- [ ] Validation works for required fields
- [ ] GET endpoints return correct data

### Frontend:
- [ ] Booking form submits successfully
- [ ] Contact form submits successfully
- [ ] Success messages display
- [ ] Error handling works
- [ ] Form resets after successful submission

---

## Future Enhancements
- Email notifications on form submission
- Admin dashboard to view bookings/messages
- Mark messages as read/responded
- Export data functionality
