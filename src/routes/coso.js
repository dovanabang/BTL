const express = require('express');
const router = express.Router();

const cosoController = require('../app/controllers/CosoController.js');


router.post('/login', cosoController.login);
router.post('/dangky', cosoController.dangky);
router.get('/themkho', cosoController.Addkho);
router.post('/kho', cosoController.Showkho);
router.delete('/delete/:id/', cosoController.delete);
router.get('/themspxuat', cosoController.themspxuat);
router.post('/spxuat', cosoController.spxuat);
router.delete('/xuat/:id/', cosoController.xuatsp);
router.use('/sptrave', cosoController.showSptrave);
router.use('/thongke', cosoController.showThongke);
router.use('/xuatsp', cosoController.showXuatsp);
router.get('/dangnhap', cosoController.showdangnhap);
router.get('/dangki', cosoController.show);
router.use('/', cosoController.index);


module.exports = router;