const express = require('express');
const router = express.Router();

const dailyController = require('../app/controllers/DailyController.js');


router.post('/login', dailyController.login);
router.post('/dangky', dailyController.dangky);
router.get('/themspbaohanh', dailyController.showthemspbh);
router.post('/showspbaohanhdathem', dailyController.showspbaohanhdathem);
router.delete('/deletespbh/:id/', dailyController.deletespbh);
router.get('/themsp', dailyController.showthemsp);
router.post('/sanphamthem', dailyController.showspdathem);
router.delete('/delete/:id/', dailyController.deletespdl);
router.use('/spcanbaohanh', dailyController.showspcanbaohanh);
router.use('/spdabaohanh', dailyController.showspdabaohanh);
router.use('/thongke/loaisp', dailyController.thongkeloaisp);
router.use('/thongke/soluong', dailyController.thongkesoluongsp);
router.use('/daban', dailyController.daban);
router.use('/chuaban', dailyController.chuaban);
router.use('/travecoso', dailyController.travecoso);
router.get('/themtravecoso', dailyController.themtravecoso);
router.post('/themtrave', dailyController.themtrave);
router.delete('/delete/sptrave/:id/', dailyController.deletesptrave);
router.use('/dangnhap', dailyController.showdangnhap);
router.use('/dangki', dailyController.show);
router.use('/', dailyController.index);


module.exports = router;