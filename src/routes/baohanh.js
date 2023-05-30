const express = require('express');
const router = express.Router();

const baohanhController = require('../app/controllers/BaohanhController.js');

router.post('/login', baohanhController.login);
router.post('/dangky', baohanhController.dangky);
router.get('/themsp', baohanhController.Addsphong);
router.post('/sp', baohanhController.Showsphong);
router.delete('/sphong/delete/:id/', baohanhController.delete);
router.use('/spsua', baohanhController.showSpdasua);
router.use('/sphong', baohanhController.showSpkhongsua);
router.use('/thongke', baohanhController.showThongke);
router.use('/sanpham', baohanhController.showSpbaohanh);
router.use('/dangnhap', baohanhController.showdangnhap);
router.use('/dangki', baohanhController.show);
router.use('/', baohanhController.index);


module.exports = router;