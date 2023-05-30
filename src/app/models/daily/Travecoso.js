const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sptravecoso = new  Schema({
    STT: { type: String},
    Masp: { type: String},
    Tensp: { type: String},
    Makho: { type: String},
    Lido: { type: String},
    Ngaytra: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Sptravecoso', Sptravecoso);