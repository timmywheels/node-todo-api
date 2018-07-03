// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID(); //Returns ObjectID
console.log(obj);



// var user = {name: 'Timothy', age: 27};
// var {name} = user; // Destructuring an object
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },  (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');


    db.collection('Users').find({name: 'Andrea Beland'}).toArray().then((docs) => { // Query by key/value
        console.log(JSON.stringify(docs, undefined, 2));
    });



    // db.collection('Todos').find().count().then((count) => { // Query by key/value
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b3bf30a9506ab0fc3ac6ea3') // Query by ObjectID
    // }).toArray().then((docs) => { // Query by key/value
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find({completed: false}).toArray().then((docs) => { // Query by key/value
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().toArray().then((docs) => { // Query all items in collection
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    client.close();
});