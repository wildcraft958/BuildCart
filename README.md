# BuildCart

BuildCart is a full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). It provides essential e-commerce functionality including user authentication, product management, shopping cart, order processing, and a comprehensive admin panel.

## Features

### User Features
- **User Authentication**: Secure registration and login with JWT-based authentication
- **Product Browsing**: Browse products with pagination and search functionality
- **Product Details**: View detailed product information including images, descriptions, and pricing
- **Shopping Cart**: Add, update, and remove products from cart
- **Order Placement**: Simple checkout process with direct order placement
- **Order History**: View past orders in user profile
- **User Profile**: Manage account information and view order history

### Admin Features
- **Product Management**: Full CRUD operations for products
- **Order Management**: View and manage all customer orders
- **User Management**: View and manage user accounts
- **Mark Orders as Delivered**: Update order delivery status

## Technology Stack

- **Frontend**: React 18, Redux Toolkit, React Bootstrap, React Router v6
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer for product image uploads

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAGINATION_LIMIT=8
```

### Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

### Database Setup

Import sample data (optional):

```bash
# Import sample products and users
npm run data:import

# Destroy all data
npm run data:destroy
```

## Running the Application

### Development Mode

```bash
# Run backend and frontend concurrently
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Build

```bash
# Build frontend for production
npm run build

# Start production server
npm start
```

## API Endpoints

### Products
- `GET /api/products` - Get all products (with pagination)
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `POST /api/users/logout` - Logout user
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/myorders` - Get logged in user orders
- `GET /api/orders/:id` - Get order by ID
- `GET /api/orders` - Get all orders (Admin)
- `PUT /api/orders/:id/deliver` - Mark order as delivered (Admin)

## Order Processing

BuildCart uses a simplified order processing system:
- **Payment Method**: All orders are processed as "Cash on Delivery"
- **No Payment Gateway**: No integration with payment processors like PayPal or Stripe
- **Direct Checkout**: Users proceed directly from cart to order placement

This design is intentional for educational purposes and can be extended with payment gateway integration if needed.

## Admin Access

To create an admin user, you can either:
1. Use the seeder script which creates a default admin user
2. Manually update a user document in MongoDB by setting `isAdmin: true`

Default admin credentials (if using seeder):
- Email: admin@email.com
- Password: 123456

**⚠️ Important**: Change default credentials in production!

## Project Structure

```
BuildCart/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── data/            # Sample data for seeding
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Express server setup
├── frontend/
│   ├── public/          # Static files
│   └── src/
│       ├── components/  # Reusable React components
│       ├── screens/     # Page components
│       ├── slices/      # Redux slices
│       └── utils/       # Frontend utilities
└── uploads/             # Product image uploads

```

## License

MIT

## Author

BuildCart Team
