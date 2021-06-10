const mongoose = require('mongoose');
const Schema = mongoose.Schema();

let userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    emailId: { type: String, required: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true}
})

const model = mongoose.model("userSchema", userSchema);

module.exports = model;