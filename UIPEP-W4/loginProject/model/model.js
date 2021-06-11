const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
        firstName: { type: String, trim: true, required: true},
        lastName: { type: String, trim: true, required: true},
        emailId: { type: String, trim: true, required: true, unique: true},
        username: { type: String, trim: true, required: true, unique: true},
        password: { type: String, required: true}   
    },
    {
        collection: 'users'        
    }
);

const model = mongoose.model("userSchema", userSchema);

module.exports = model;