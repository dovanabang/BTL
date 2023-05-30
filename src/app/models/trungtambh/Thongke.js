const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Thongke = new  Schema({
    STT: { type: String},
    Masp: { type: String},
    Tensp: { type: String},
    Trangthaisp: { type: String},
    Ngayban: { type: String},
    Giasp: { type: String},
    Soluongsp: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Thongke', Thongke);