const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sptrave = new  Schema({
    STT: { type: String},
    Masp: { type: String},
    Tensp: { type: String},
    Trangthaisp: { type: String},
    Solanbaohanh: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Sptrave', Sptrave);