const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    country: String
});

module.exports = mongoose.model('users',userSchema);
