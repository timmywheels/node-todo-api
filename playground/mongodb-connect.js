// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID(); //Returns ObjectID
console.log(obj);



var user = {name: 'Timothy', age: 27};
var {name} = user; // Destructuring an object
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Become a serial entrepreneur',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Tim Wheeler',
        age: 27,
        location: 'Boston, MA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to create user', err);
        }
        // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
});