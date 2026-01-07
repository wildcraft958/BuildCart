import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BuildCart API',
            version: '1.0.0',
            description: 'E-commerce platform API for product management, user authentication, and order processing',
            contact: {
                name: 'BuildCart Team',
            },
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Development server',
            },
        ],
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                    name: 'jwt',
                },
            },
            schemas: {
                Product: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string', description: 'Product ID' },
                        name: { type: 'string', description: 'Product name' },
                        image: { type: 'string', description: 'Product image URL' },
                        description: { type: 'string', description: 'Product description' },
                        brand: { type: 'string', description: 'Product brand' },
                        category: { type: 'string', description: 'Product category' },
                        price: { type: 'number', description: 'Product price' },
                        countInStock: { type: 'integer', description: 'Stock count' },
                        rating: { type: 'number', description: 'Average rating' },
                        numReviews: { type: 'integer', description: 'Number of reviews' },
                    },
                },
                User: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string', description: 'User ID' },
                        name: { type: 'string', description: 'User name' },
                        email: { type: 'string', format: 'email', description: 'User email' },
                        isAdmin: { type: 'boolean', description: 'Admin status' },
                    },
                },
                Order: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string', description: 'Order ID' },
                        user: { type: 'string', description: 'User ID' },
                        orderItems: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    name: { type: 'string' },
                                    qty: { type: 'integer' },
                                    image: { type: 'string' },
                                    price: { type: 'number' },
                                    product: { type: 'string' },
                                },
                            },
                        },
                        shippingAddress: {
                            type: 'object',
                            properties: {
                                address: { type: 'string' },
                                city: { type: 'string' },
                                postalCode: { type: 'string' },
                                country: { type: 'string' },
                            },
                        },
                        paymentMethod: { type: 'string', description: 'Payment method' },
                        itemsPrice: { type: 'number' },
                        taxPrice: { type: 'number' },
                        shippingPrice: { type: 'number' },
                        totalPrice: { type: 'number' },
                        isPaid: { type: 'boolean' },
                        isDelivered: { type: 'boolean' },
                    },
                },
                Error: {
                    type: 'object',
                    properties: {
                        message: { type: 'string', description: 'Error message' },
                        stack: { type: 'string', description: 'Stack trace (development only)' },
                    },
                },
            },
        },
        tags: [
            { name: 'Products', description: 'Product management endpoints' },
            { name: 'Users', description: 'User authentication and management' },
            { name: 'Orders', description: 'Order processing endpoints' },
            { name: 'Upload', description: 'File upload endpoints' },
        ],
    },
    apis: ['./backend/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
