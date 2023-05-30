const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpDailyvsCoso = new  Schema({
    STT: { type: String},
    Makho: { type: String},
    Diachikho: { type: String},
    Masp: { type: String},
    Tensp: { type: String},
    Soluong: { type: String},
    Madaily: { type: String},
    Tendaily: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}

});

module.exports = mongoose.model('SpDailyvsCoso', SpDailyvsCoso);

