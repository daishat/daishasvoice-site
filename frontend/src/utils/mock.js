// Mock data storage for frontend-only functionality
// This simulates backend API calls and will be replaced with real API integration

const mockBookingRequests = [];
const mockContactMessages = [];

export const saveBookingRequest = async (bookingData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const booking = {
    id: Date.now(),
    ...bookingData,
    timestamp: new Date().toISOString(),
    status: 'pending'
  };
  
  mockBookingRequests.push(booking);
  console.log('Booking request saved (MOCK):', booking);
  
  return { success: true, data: booking };
};

export const saveContactMessage = async (messageData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const message = {
    id: Date.now(),
    ...messageData,
    timestamp: new Date().toISOString(),
    status: 'unread'
  };
  
  mockContactMessages.push(message);
  console.log('Contact message saved (MOCK):', message);
  
  return { success: true, data: message };
};

export const getBookingRequests = () => {
  return mockBookingRequests;
};

export const getContactMessages = () => {
  return mockContactMessages;
};
