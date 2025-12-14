const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Database Connection (Cached for Serverless)
let cachedDb = null;

const connectToDatabase = async () => {
    if (cachedDb) {
        return cachedDb;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
        cachedDb = db;
        console.log('MongoDB Connected (New Connection)');
        return db;
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

// Ensure DB is connected for every request
app.use(async (req, res, next) => {
    await connectToDatabase();
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Import Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// For Vercel: Export the app
module.exports = app;

// Only listen if not running in Vercel (Vercel handles the port binding)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
