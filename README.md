
# 🛍️ UrbanStyle – E-Commerce Web Application

**UrbanStyle** is a full-featured e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js).

Developed by:
- **Muhammad Hassan Khalid (21L-5692)**
- **Muhammad Hamza (21L-5636)**

UrbanStyle offers a seamless and engaging shopping experience tailored exclusively for **men’s fashion**, focusing on premium shirt categories like **Polo Shirts**, **T-Shirts**, and **Formal Shirts**.

## 🔑 Key Highlights
- 🎯 Role-based access for **Customers** and **Admin**
- 🧭 Intuitive and responsive **user interface** for smooth navigation
- 🔍 Advanced **search and filtering** features for quick product discovery
- 🛒 Interactive **product display** with reviews, ratings, and high-resolution images
- 📦 Complete **cart and checkout system** with **Stripe** integration for secure payments
- 🚚 **Order tracking** and **notifications**
- 💸 **Coupons & discount codes** for promotional offers
- 🏬 **Local store info** and **social media links** for extended reach
- ❓ **FAQ section** to assist users with common queries

UrbanStyle combines clean design with robust functionality to provide a modern and scalable online shopping solution.

---

## 🚀 Overview

UrbanStyle includes three main components:
1. **Frontend (Customer Website)** – for browsing and shopping
2. **Admin Panel** – for managing products, orders, and users
3. **Backend Server** – handles authentication, APIs, payment, and database interactions

---

## ⚙️ Features

### Customer Website
- 🔐 User Authentication (JWT)
- 🛒 Product browsing, search, cart, and order placement
- 💳 Secure Stripe Payment Integration
- 📦 Order tracking and management

### Admin Panel
- 🛍️ Product Management (Add/Edit/Delete)
- 📦 Order Management
- ⭐ Review Moderation
- 🎟️ Coupon Management

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, Mongoose
- **Authentication**: JWT
- **Image Uploads**: Cloudinary
- **Payments**: Stripe API

---

## 📦 Prerequisites

- Node.js (v14 or higher) – [Download](https://nodejs.org/)
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Git
- npm or yarn

---

## 📁 Directory Structure

```
urbanstyle/
├── backend/   # Express.js backend server
├── frontend/  # Customer-facing React website
└── admin/     # Admin dashboard
```

---

## 🔧 Project Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/devil893/UrbanStyle
cd UrbanStyle
```

### 2️⃣ Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

**Admin:**
```bash
cd ../admin
npm install
```

---

## 🔐 Environment Variables Setup

### 🔙 Backend (`backend/.env`)
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:4000
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

### 🌐 Frontend (`frontend/.env`)
```env
REACT_APP_API_URL=http://localhost:4000
```

### 🛠️ Admin Panel (`admin/.env`)
```env
PORT=3001
REACT_APP_API_URL=http://localhost:4000
```

---

## ▶️ Run the Application Locally

### Step 1: Start Backend Server
```bash
cd backend
npm run dev
```

### Step 2: Start Frontend Website
Open a new terminal:
```bash
cd frontend
npm start
```

### Step 3: Start Admin Panel
Open another terminal:
```bash
cd admin
npm start
```

---

## 🧪 Test Accounts

- **Admin Login**
  - Email: `admin@gmail.com`
  - Password: `admin123`

---

## 💳 Payment Testing (Stripe)

Use the following test card numbers with any future expiry date and any 3-digit CVC:

- ✅ **Successful Payment**: `4242 4242 4242 4242`
- ❌ **Declined Card**: `4000 0000 0000 0002`
- ❌ **Insufficient Funds**: `4000 0000 0000 9995`
- ❌ **Expired Card**: `4000 0000 0000 0069`
- ❌ **Processing Error**: `4000 0000 0000 0119`

---

## 📌 Important Notes

1. Ensure MongoDB is running or MongoDB Atlas is correctly configured.
2. The backend server **must be running** for frontend and admin to work.
3. Create a **Cloudinary** account and use your credentials in `.env`.
4. Set up a **Stripe** account and use the secret key in the backend `.env`.

---

## 👨‍💻 Usage Guide

1. Register a new user and log in via the frontend.
2. As an admin, log in to the admin panel.
3. Add products and view/manage orders.
4. Shop from the customer website and place test orders using Stripe.

---
