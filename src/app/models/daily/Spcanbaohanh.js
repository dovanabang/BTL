const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Spcanbaohanh = new  Schema({
    STT: { type: String},
    Masp: { type: String},
    Tensp: { type: String},
    Trangthaibaohanh: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Spcanbaohanh', Spcanbaohanh);


