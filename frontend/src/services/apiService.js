// frontend/src/services/apiService.js

// Use local backend during development, deployed backend in production
const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://node-fs-ecommerce.onrender.com'
    : 'http://localhost:5000';

// Helper function to handle fetch responses
const handleResponse = async (response) => {
  if (response.status === 200 || response.status === 304) {
    return response.json().catch(() => ({})); // in case of empty JSON
  } else {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || 'Request failed');
  }
};

export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`, { cache: 'no-store' });
  return handleResponse(response);
};

export const placeOrder = async (orderData) => {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  });
  return handleResponse(response);
};

export const getAllOrders = async () => {
  const response = await fetch(`${API_BASE_URL}/orders`, { cache: 'no-store' });
  return handleResponse(response);
};
