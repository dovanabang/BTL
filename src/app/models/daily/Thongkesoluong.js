const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Thongkesoluong = new  Schema({
    STT: { type: String},
    Masp: { type: String},
    Tensp: { type: String},
    Makho: { type: String},
    Ngaynhap: { type: String},
    Soluong: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Thongkesoluong', Thongkesoluong);