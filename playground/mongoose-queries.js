const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b3d6f75dbf37b1609e41f0e';
let userId = '5b3d730d1b607745116856a1';

if (!ObjectID.isValid(id)) {
    return console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID not found');
    }
    console.log('Todo By ID:', todo);
});

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found.');
    }
    console.log('User ID:', JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
});
