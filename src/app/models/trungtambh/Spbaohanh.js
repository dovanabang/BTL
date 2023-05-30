const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Spbaohanh = new  Schema({
    STT: { type: String},
    Masp: { type: String},
    Trangthaibaohanh: { type: String},
    Solanbaohanh: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Spbaohanh', Spbaohanh);