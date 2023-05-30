const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Khosp = new  Schema({
    STT: { type: String},
    makho: { type: String},
    tensp: { type: String},
    soluong: { type: String},
    diachikho: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Khosp', Khosp);