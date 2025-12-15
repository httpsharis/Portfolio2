const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'https://portfolio2-pi-mocha.vercel.app'
}));
app.use(express.json()); // For parsing JSON bodies

// Database Connection (Cached for Serverless)
let cachedDb = null;

if (cachedDb) {
    return cachedDb;
}
// No try-catch here, let the caller handle it so we see the error!
const db = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
cachedDb = db;
console.log('MongoDB Connected (New Connection)');
return db;

// Ensure DB is connected for every request
app.use(async (req, res, next) => {
    await connectToDatabase();
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Debug Route: Test DB Connection
app.get('/api/health', async (req, res) => {
    try {
        await connectToDatabase();
        if (mongoose.connection.readyState === 1) {
            res.json({ status: 'OK', message: 'Database Connected Successfully', dbName: mongoose.connection.name });
        } else {
            res.status(500).json({ status: 'Error', message: 'Database Not Connected', state: mongoose.connection.readyState });
        }
    } catch (error) {
        res.status(500).json({ status: 'Critical Error', message: error.message, stack: error.stack });
    }
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
