// frontend/src/services/apiService.js

// Detect if running locally or on deployment
const API_BASE_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000' // your local backend URL
    : 'https://node-fs-ecommerce.onrender.com'; // deployed backend URL

// Helper to handle fetch responses
const handleResponse = async (response) => {
  if (response.status === 200 || response.status === 304) {
    return response.json().catch(() => ({})); // safe fallback for empty JSON
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
