const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name.'],
        trim: true  
    },
    email: {
        type: String,
        required: [true, 'Please provide your email.'],
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
    },
    projectType: {
        type: String,
        required: [true, 'Please provide a project type.'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message.'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('ContactMessage', contactMessageSchema);