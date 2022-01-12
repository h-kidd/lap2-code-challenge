const mongoose = require('mongoose');

// post schema 
const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        min: 3
    },
    date: {
        type: Date,
        required: true
    },
    body: {
        type: String,
        required: true,
        min: 6
    }
});

module.exports = mongoose.model('Post', postSchema);