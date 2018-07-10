const mongoose = require('mongoose');

// Create a mongoose data model
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true, // Makes property required
        minlength: 1, // Requires a minlength
        trim: true // Removes whitespace from start/end of string
    },
    completed: {
        type: Boolean,
        default: false // Sets default value to false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};