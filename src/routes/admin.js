const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController.js');


router.post('/login', adminController.login);
router.post('/dangky', adminController.dangky);
router.get('/themUserCoso', adminController.themCoso);
router.get('/themUserBaohanh', adminController.themBaohanh);
router.get('/themUserDaily', adminController.themDaily);
router.post('/themUserCoso', adminController.dathemCoso);
router.post('/themUserBaohanh', adminController.dathemBaohanh);
router.post('/themUserDaily', adminController.dathemDaily);
router.get('/themsp', adminController.Addsp);
router.post('/sp', adminController.Showsp);
router.use('/quanlisp', adminController.showQuanlisp);
router.get('/quanli/:id/sua', adminController.Sua);
router.get('/quanlitk', adminController.quanlitk);
router.delete('/quanlitk/delete/:id', adminController.deletetk);
router.put('/quanli/update/:id/', adminController.update);
router.delete('/quanli/delete/:id/', adminController.delete);
router.get('/pageAdmin', adminController.show);
router.use('/', adminController.index); 


module.exports = router;