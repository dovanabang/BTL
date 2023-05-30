const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chuaban = new  Schema({
    STT: { type: String},
    Masp: { type: String},
    Tensp: { type: String},
    Madaily: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Chuaban', Chuaban);