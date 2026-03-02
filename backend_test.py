#!/usr/bin/env python3

import asyncio
import aiohttp
import json
from datetime import datetime
import sys
import os
from pathlib import Path

# Add the backend directory to Python path to access models
sys.path.append('/app/backend')

# Get the backend URL from frontend .env file
def get_backend_url():
    env_file = Path("/app/frontend/.env")
    if env_file.exists():
        with open(env_file, 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    return "http://localhost:8001"

BASE_URL = get_backend_url() + "/api"

class TestResult:
    def __init__(self):
        self.tests_passed = 0
        self.tests_failed = 0
        self.failures = []
    
    def pass_test(self, test_name):
        self.tests_passed += 1
        print(f"✅ PASSED: {test_name}")
    
    def fail_test(self, test_name, error):
        self.tests_failed += 1
        self.failures.append(f"{test_name}: {error}")
        print(f"❌ FAILED: {test_name} - {error}")
    
    def print_summary(self):
        total = self.tests_passed + self.tests_failed
        print(f"\n{'='*50}")
        print(f"TEST SUMMARY")
        print(f"{'='*50}")
        print(f"Total Tests: {total}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_failed}")
        
        if self.failures:
            print(f"\nFAILED TESTS:")
            for failure in self.failures:
                print(f"- {failure}")
        
        if self.tests_failed == 0:
            print(f"\n🎉 All tests passed!")
        else:
            print(f"\n⚠️  {self.tests_failed} test(s) failed")

async def test_booking_endpoints():
    """Test POST /api/bookings and GET /api/bookings"""
    result = TestResult()
    
    async with aiohttp.ClientSession() as session:
        # Test 1: Create a booking request
        booking_data = {
            "name": "Test Client",
            "company": "Test Studios", 
            "email": "test@example.com",
            "projectType": "commercial",
            "budget": "1000-2500",
            "deadline": "2025-04-01",
            "message": "Testing booking request API"
        }
        
        try:
            async with session.post(f"{BASE_URL}/bookings", json=booking_data) as resp:
                if resp.status == 200:
                    data = await resp.json()
                    
                    # Verify required fields
                    if all(key in data for key in ['id', 'timestamp', 'status']):
                        if data['status'] == 'pending':
                            result.pass_test("POST /api/bookings - Create booking with valid data")
                            created_booking_id = data['id']
                        else:
                            result.fail_test("POST /api/bookings", f"Expected status 'pending', got '{data['status']}'")
                    else:
                        result.fail_test("POST /api/bookings", "Missing required fields (id, timestamp, status)")
                else:
                    text = await resp.text()
                    result.fail_test("POST /api/bookings", f"HTTP {resp.status}: {text}")
                    
        except Exception as e:
            result.fail_test("POST /api/bookings", f"Request failed: {str(e)}")
        
        # Test 2: Retrieve all booking requests
        try:
            async with session.get(f"{BASE_URL}/bookings") as resp:
                if resp.status == 200:
                    data = await resp.json()
                    
                    if isinstance(data, list):
                        # Look for the booking we just created
                        found_booking = False
                        for booking in data:
                            if booking.get('name') == 'Test Client' and booking.get('email') == 'test@example.com':
                                found_booking = True
                                break
                        
                        if found_booking:
                            result.pass_test("GET /api/bookings - Retrieve booking requests")
                        else:
                            result.fail_test("GET /api/bookings", "Created booking not found in results")
                    else:
                        result.fail_test("GET /api/bookings", "Response is not a list")
                else:
                    text = await resp.text()
                    result.fail_test("GET /api/bookings", f"HTTP {resp.status}: {text}")
                    
        except Exception as e:
            result.fail_test("GET /api/bookings", f"Request failed: {str(e)}")
    
    return result

async def test_contact_endpoints():
    """Test POST /api/contact and GET /api/contact"""
    result = TestResult()
    
    async with aiohttp.ClientSession() as session:
        # Test 3: Create a contact message
        contact_data = {
            "name": "Jane Doe",
            "email": "jane@example.com",
            "subject": "Test inquiry",
            "message": "Testing contact message API"
        }
        
        try:
            async with session.post(f"{BASE_URL}/contact", json=contact_data) as resp:
                if resp.status == 200:
                    data = await resp.json()
                    
                    # Verify required fields
                    if all(key in data for key in ['id', 'timestamp', 'status']):
                        if data['status'] == 'unread':
                            result.pass_test("POST /api/contact - Create contact message with valid data")
                            created_contact_id = data['id']
                        else:
                            result.fail_test("POST /api/contact", f"Expected status 'unread', got '{data['status']}'")
                    else:
                        result.fail_test("POST /api/contact", "Missing required fields (id, timestamp, status)")
                else:
                    text = await resp.text()
                    result.fail_test("POST /api/contact", f"HTTP {resp.status}: {text}")
                    
        except Exception as e:
            result.fail_test("POST /api/contact", f"Request failed: {str(e)}")
        
        # Test 4: Retrieve all contact messages
        try:
            async with session.get(f"{BASE_URL}/contact") as resp:
                if resp.status == 200:
                    data = await resp.json()
                    
                    if isinstance(data, list):
                        # Look for the contact message we just created
                        found_contact = False
                        for contact in data:
                            if contact.get('name') == 'Jane Doe' and contact.get('email') == 'jane@example.com':
                                found_contact = True
                                break
                        
                        if found_contact:
                            result.pass_test("GET /api/contact - Retrieve contact messages")
                        else:
                            result.fail_test("GET /api/contact", "Created contact message not found in results")
                    else:
                        result.fail_test("GET /api/contact", "Response is not a list")
                else:
                    text = await resp.text()
                    result.fail_test("GET /api/contact", f"HTTP {resp.status}: {text}")
                    
        except Exception as e:
            result.fail_test("GET /api/contact", f"Request failed: {str(e)}")
    
    return result

async def test_validation_endpoints():
    """Test validation for required fields"""
    result = TestResult()
    
    async with aiohttp.ClientSession() as session:
        # Test 5a: POST /api/bookings with missing required fields
        invalid_booking_data = {
            "company": "Test Studios",
            "projectType": "commercial"
            # Missing name, email, message
        }
        
        try:
            async with session.post(f"{BASE_URL}/bookings", json=invalid_booking_data) as resp:
                if resp.status == 422:  # FastAPI returns 422 for validation errors
                    result.pass_test("POST /api/bookings - Validation with missing required fields")
                else:
                    result.fail_test("POST /api/bookings validation", f"Expected HTTP 422, got {resp.status}")
                    
        except Exception as e:
            result.fail_test("POST /api/bookings validation", f"Request failed: {str(e)}")
        
        # Test 5b: POST /api/contact with missing required fields
        invalid_contact_data = {
            "subject": "Test inquiry"
            # Missing name, email, message
        }
        
        try:
            async with session.post(f"{BASE_URL}/contact", json=invalid_contact_data) as resp:
                if resp.status == 422:  # FastAPI returns 422 for validation errors
                    result.pass_test("POST /api/contact - Validation with missing required fields")
                else:
                    result.fail_test("POST /api/contact validation", f"Expected HTTP 422, got {resp.status}")
                    
        except Exception as e:
            result.fail_test("POST /api/contact validation", f"Request failed: {str(e)}")
    
    return result

async def test_basic_connectivity():
    """Test basic API connectivity"""
    result = TestResult()
    
    async with aiohttp.ClientSession() as session:
        try:
            async with session.get(f"{BASE_URL}/") as resp:
                if resp.status == 200:
                    data = await resp.json()
                    if data.get('message') == 'Hello World':
                        result.pass_test("GET /api/ - Basic connectivity")
                    else:
                        result.fail_test("GET /api/", f"Unexpected response: {data}")
                else:
                    text = await resp.text()
                    result.fail_test("GET /api/", f"HTTP {resp.status}: {text}")
                    
        except Exception as e:
            result.fail_test("GET /api/", f"Connection failed: {str(e)}")
    
    return result

async def main():
    print(f"Testing D'Aisha Voice Portfolio Backend APIs")
    print(f"Backend URL: {BASE_URL}")
    print("="*50)
    
    # Run all tests
    connectivity_result = await test_basic_connectivity()
    booking_result = await test_booking_endpoints()
    contact_result = await test_contact_endpoints()
    validation_result = await test_validation_endpoints()
    
    # Combine results
    total_result = TestResult()
    for result in [connectivity_result, booking_result, contact_result, validation_result]:
        total_result.tests_passed += result.tests_passed
        total_result.tests_failed += result.tests_failed
        total_result.failures.extend(result.failures)
    
    total_result.print_summary()
    
    # Return non-zero exit code if any tests failed
    return total_result.tests_failed

if __name__ == "__main__":
    exit_code = asyncio.run(main())
    sys.exit(exit_code)