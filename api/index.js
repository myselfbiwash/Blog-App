import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

/* MONGOOSE SETUP */
const MONGO_URL = process.env.MONGO_URI;

console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Failed to connect to MongoDB:', error));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});