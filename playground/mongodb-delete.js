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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })


    // Remove all users from hudson, ma
    // db.collection('Users').deleteMany({location: 'Hudson, MA'}).then((result) => {
    //     console.log(result);
    // });


    // Remove one user, targeted by specific ID
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5b3bdb6f31d3790e421a963a')
    // }).then((result) => {
    //     console.log(result);
    // })




    // db.close();
});