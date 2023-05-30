const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Spbaohanh = new  Schema({
    STT: { type: String},
    masp: { type: String},
    trangthaibaohanh: { type: String},
    solanbaohanh: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('spbaohanh', Spbaohanh);