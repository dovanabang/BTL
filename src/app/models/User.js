const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new  Schema({
    username: { type: String},
    password: { type: String},
    email: { type: String},
    role: { type: String },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', User); 