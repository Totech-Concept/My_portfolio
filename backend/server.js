const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const ContactMessage = require('./models/ContactMessage');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolioDB';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, projectType, message } = req.body;

        if (!name || !email || !projectType || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required.' });
        }

        const newMessage = new ContactMessage({ name, email, projectType, message });
        await newMessage.save();

        res.status(201).json({ 
            success: true, 
            message: 'Your message has been sent successfully.',
            data: newMessage});
    } catch (error) {
        console.error('Error sending contact message:', error);
        res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});