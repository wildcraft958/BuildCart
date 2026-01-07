import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;
        const sampleUser = createdUsers[1]._id;
        const sampleUser2 = createdUsers[2]._id;

        // Assign user IDs to reviews in round-robin fashion
        const userIds = [adminUser, sampleUser, sampleUser2];

        const sampleProducts = products.map((product) => {
            const productWithUser = { ...product, user: adminUser };

            // Add user IDs to each review
            if (productWithUser.reviews && productWithUser.reviews.length > 0) {
                productWithUser.reviews = productWithUser.reviews.map((review, index) => ({
                    ...review,
                    user: userIds[index % userIds.length],
                }));
            }

            return productWithUser;
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
