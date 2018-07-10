const mongoose = require('mongoose');
const validator = require('validator');

// Create mongoose user model
let User = mongoose.model('User', {
    // name: {
    //     type: String,
    //     required: true, // Makes property required
    //     minlength: 1, // Requires a minlength
    //     trim: true // Removes whitespace from start/end of string
    // },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not a valid email`
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }],
    // phone: {
    //     type: String,
    //     required: true,
    //     minlength: 10,
    //     trim: true
    // },
    // location: {
    //     type: String,
    //     minlength: 1,
    //     trim: true
    // }
});

module.exports = {User};

// let newUser = new User({
//     name: 'Tim Wheeler',
//     email: 'tim@timwheeler.com',
//     phone: '774-245-6079',
//     location: 'Providence, RI'
// });
//
// newUser.save().then((doc) => {
//     console.log(doc);
// }, (err) => {
//     console.log('Unable to add user', err);
// });
// User
// email - require it - trim it - minlength 1