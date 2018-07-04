const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Create a mongoose data model
var Todo = mongoose.model('Todo', {
   text: {
       type: String
   },
    completed: {
       type: Boolean
    },
    completedAt: {
       type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner',
});

var otherTodo = new Todo({
    text: 'Workout',
    completed: true,
    completedAt: 1300
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo.');
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo.');
});