// frontend/src/services/apiService.js

// Detect if running locally or on deployment
const isLocalhost = window.location.hostname === 'localhost';

// When running `npm start` (CRA dev server), use /api so proxy works.
// When deployed, talk directly to the Render backend with /api prefix.
const API_BASE_URL = isLocalhost
  ? '/api'
  : 'https://node-fs-ecommerce.onrender.com/api';

// Generic response handler
const handleResponse = async (response) => {
  if (response.ok) {
    // Assuming backend always sends JSON
    return response.json();
  }

  let message = 'Request failed';

  try {
    const body = await response.json();
    if (body && body.error) {
      message = body.error;
    }
  } catch {
    // ignore JSON parse errors, keep default message
  }

  throw new Error(message);
};

export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    cache: 'no-store',
  });
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
  const response = await fetch(`${API_BASE_URL}/orders`, {
    cache: 'no-store',
  });
  return handleResponse(response);
};
