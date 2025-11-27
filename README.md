# Simple E‑commerce Learning Project

This repository is a small full‑stack learning project (backend + frontend) that demonstrates a simple e‑commerce flow: listing products, adding to a cart, and placing orders.

The backend is built with Node and Express and stores data in JSON files under `backend/data/` using Node's built‑in `fs` module to read and write orders and product data. This is intentionally simple for learning purposes — it's not intended for production use.

**Key points**
- **Backend `fs` usage:** The backend reads from and writes to `backend/data/orders.json` and `backend/data/products.json` using `fs` (synchronous or asynchronous file operations in the controllers). When a new order is placed, that order is appended/saved to `orders.json` so data persists across server restarts.
- **Project type:** Learning/demo project — helpful for practicing Express controllers, routes, and a React frontend.
- **Not production ready:** Using `fs` for persistence has concurrency and durability limitations. Consider using a proper database (SQLite, PostgreSQL, MongoDB) for real projects.

Project structure (top-level):

- `backend/` - Express API server
  - `server.js` - app entry
  - `controllers/` - `orderController.js`, `productController.js`
  - `routes/` - `orderRoutes.js`, `productRoutes.js`
  - `models/` - `productModel.js`
  - `data/` - `orders.json`, `products.json` (persisted files)
  - `utils/` - `validationMiddleware.js`
- `frontend/` - React app (product listing, cart, order form)

Run locally

Open two terminals (one for backend, one for frontend).

PowerShell commands to run the backend:

```powershell
cd backend
npm install
npm start
```

PowerShell commands to run the frontend:

```powershell
cd frontend
npm install
npm start
```

Notes and development tips

- When placing an order via the frontend, the backend will update `backend/data/orders.json`. If you need to reset sample data, edit or replace that file.

Enjoy exploring and extending the project!
