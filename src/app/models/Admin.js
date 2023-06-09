const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new  Schema({
    name: { type: String},
    password: { type: String},
    remember: { type: Boolean},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Admin', Admin);