# BuildCart

A modern, full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). Features a stunning dark theme with glassmorphism effects, comprehensive product management, and streamlined checkout process.

![Dark Theme](https://img.shields.io/badge/Theme-Dark-0a0a0f?style=flat-square)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)

## ✨ Features

### User Features
- 🔐 **Secure Authentication** - JWT-based login/registration with cookie storage
- 🛍️ **Product Browsing** - Browse 16+ products with pagination and search
- 🛒 **Shopping Cart** - Add, update, and remove items
- 📦 **Order Placement** - Streamlined Cash on Delivery checkout
- 👤 **User Profile** - Manage account and view order history
- ⭐ **Product Reviews** - Rate and review products

### Admin Features
- 📊 **Dashboard** - Manage products, orders, and users
- 📝 **Product CRUD** - Full product management with image upload
- 🚚 **Order Management** - View and mark orders as delivered
- 👥 **User Management** - View and manage user accounts

### Design & UX
- 🌙 **Dark Theme** - Modern dark UI with glassmorphism effects
- 🎨 **Inter Font** - Clean, professional typography
- 📱 **Responsive** - Works on all devices
- ✨ **Smooth Animations** - Hover effects and transitions

## 🛠️ Technology Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, Redux Toolkit, React Bootstrap, React Router v6 |
| **Backend** | Node.js, Express.js, Swagger API Docs |
| **Database** | MongoDB with Mongoose ODM |
| **Auth** | JWT (JSON Web Tokens) with HTTP-only cookies |
| **Styling** | Custom CSS with CSS Variables, Glassmorphism |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd BuildCart

# Install all dependencies
npm install
cd frontend && npm install && cd ..
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/buildcart
JWT_SECRET=your_super_secret_jwt_key_here
PAGINATION_LIMIT=8
```

### 3. Seed Database

```bash
# Import sample data (16 products + 3 users)
npm run data:import

# To clear database
npm run data:destroy
```

### 4. Run Application

```bash
# Development (frontend + backend)
npm run dev
```

**Access Points:**
- 🌐 Frontend: http://localhost:3000
- 🔌 API: http://localhost:5000
- 📚 API Docs: http://localhost:5000/api-docs

## 👤 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@buildcart.com | admin123 |
| User | john@example.com | password123 |
| User | jane@example.com | password123 |

## 📡 API Documentation

Interactive Swagger documentation available at `/api-docs` when running the server.

### Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/users/auth` | Login |
| `POST` | `/api/users` | Register |
| `GET` | `/api/products` | Get products (paginated) |
| `GET` | `/api/products/:id` | Get single product |
| `POST` | `/api/orders` | Create order |
| `GET` | `/api/orders/mine` | Get user's orders |

## 📁 Project Structure

```
BuildCart/
├── backend/
│   ├── config/          # DB & Swagger config
│   ├── controllers/     # Route handlers
│   ├── data/           # Seed data (products, users)
│   ├── middleware/     # Auth & error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes with Swagger docs
│   └── server.js       # Express entry point
├── frontend/
│   ├── public/         # Static assets & product images
│   └── src/
│       ├── assets/     # Styles (dark theme CSS)
│       ├── components/ # Reusable components
│       ├── screens/    # Page components
│       └── slices/     # Redux state management
└── uploads/            # User uploaded images
```

## 🎨 Theme Customization

The dark theme uses CSS custom properties in `frontend/src/assets/styles/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --accent: #6366f1;
  --text-primary: #ffffff;
  /* ... more variables */
}
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run frontend & backend |
| `npm run server` | Run backend only |
| `npm run client` | Run frontend only |
| `npm run data:import` | Seed database |
| `npm run data:destroy` | Clear database |
| `npm run build` | Production build |

## 🔒 Security Notes

- JWT tokens stored in HTTP-only cookies
- Passwords hashed with bcrypt
- Admin routes protected with middleware
- No sensitive data in client-side storage

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

Built with ❤️ using the MERN Stack
