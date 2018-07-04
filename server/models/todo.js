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

//
// let newTodo = new Todo({
//     text: 'Cook dinner',
// });
//
// let otherTodo = new Todo({
//     text: 'Workout',
//     completed: true,
//     completedAt: 1300
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo.');
// });
//
// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo.');
// });