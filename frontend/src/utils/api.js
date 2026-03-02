import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Booking Request API
export const createBookingRequest = async (bookingData) => {
  try {
    const response = await axios.post(`${API}/bookings`, bookingData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error creating booking request:', error);
    return {
      success: false,
      error: error.response?.data?.detail || 'Failed to submit booking request. Please try again.'
    };
  }
};

export const getBookingRequests = async () => {
  try {
    const response = await axios.get(`${API}/bookings`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error fetching booking requests:', error);
    return {
      success: false,
      error: error.response?.data?.detail || 'Failed to fetch booking requests.'
    };
  }
};

// Contact Message API
export const createContactMessage = async (messageData) => {
  try {
    const response = await axios.post(`${API}/contact`, messageData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error creating contact message:', error);
    return {
      success: false,
      error: error.response?.data?.detail || 'Failed to submit contact message. Please try again.'
    };
  }
};

export const getContactMessages = async () => {
  try {
    const response = await axios.get(`${API}/contact`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return {
      success: false,
      error: error.response?.data?.detail || 'Failed to fetch contact messages.'
    };
  }
};
