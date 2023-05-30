const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mathang = new  Schema({
    STT: { type: String},
    masp: { type: String},
    tensp: { type: String},
    dongsp: { type: String},
    giasp: { type: String},
    motasp: { type: String},
    trangthaisp: { type: String},
    makho: { type: String},
    mashop: { type: String},
    thoigianbaohanh: { type: String},
    dangbaohanh: {type: String},
    ngayban: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Mathang', Mathang)