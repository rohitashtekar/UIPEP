const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        emailId: { type: String, required: true},
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true}   
    },
    {
        collection: 'users'        
    }
);

const model = mongoose.model("userSchema", userSchema);

module.exports = model;