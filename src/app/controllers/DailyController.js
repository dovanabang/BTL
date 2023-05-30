const Spcanbaohanh = require("../models/daily/Spcanbaohanh");
const Spdabaohanh = require("../models/daily/Spdabaohanh");
const SpDailyvsCoso = require("../models/SpDaiLyvsCoso");
const {mutipleMongooseToObject} = require("../../until/mongoose");
const Thongkeloaisp = require("../models/daily/Thongkeloaisp");
const Thongkesoluong = require("../models/daily/Thongkesoluong");
const Daban = require("../models/daily/Daban");
const Chuaban = require("../models/daily/Chuaban");
const Travecoso = require("../models/daily/Travecoso");
const User = require("../models/User");
const bcrypt = require('bcrypt');

class DailyController {
    index(req, res, next) {
        // Spdaily.find({})
        //     .then(Spdaily => {
        //         res.render('Daily\\dailyphanphoi', {
        //             Spdaily: mutipleMongooseToObject(Spdaily)
        //         });
        //     })
        //     .catch(next);

            SpDailyvsCoso.find({})
            .then(SpDailyvsCoso => {
                res.render('Daily\\dailyphanphoi', {
                    SpDailyvsCoso: mutipleMongooseToObject(SpDailyvsCoso)
                });
            })
            .catch(next);
    }

    showdangnhap(req, res) {
        res.render('Daily\\dldn');
    };

    show(req, res) {
        res.render('Daily\\dkdl');
    };

    dangky(req, res, next){
        const {username, email, password} = req.body;
     
        try{
            const salt = bcrypt.genSalt(10);
            
    
            const hashedPW = bcrypt.hashSync (password, parseInt(salt));


            const  result = new User({
                username: username,
                password: hashedPW,
                email: email,
                role: "đại lý",
            });

            result.save();


            res.redirect('/daily/dangnhap');
    
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Something went wrong"});
        }

    }

    async login(req, res, next){
        var username = req.body.username;
        var password = req.body.password;
        try{
            const existingUser = await User.findOne({
                username: username
            });

            const matchPassword = bcrypt.compare(password, existingUser.password);
            if((!matchPassword) || existingUser.role !== "đại lý") {
                
                res.status(400).json({message: "Invalid Credentails"});
            }

            if(existingUser && matchPassword) {
                res.redirect('/daily')
            } 
            
        } catch(error) {
            console.log(error);
            res.status(500).json({message: "Something went wrong"})
        }
         
        
    }
    
    showthemspbh(req, res,next){
        res.render('Daily\\themspbaohanh');
    }

    showthemsp(req, res,next){
        res.render('Daily\\dailythemsp');
    }

    showspdathem(req, res,next){
        const formData = req.body;

        const spDailyvsCoso = new SpDailyvsCoso(formData);

        spDailyvsCoso.save()
            .then(() =>res.redirect('/daily'))
            .catch(next);
    }

    deletespdl(req, res, next) {
        SpDailyvsCoso.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }


    showspbaohanhdathem(req, res,next){
        const formData = req.body;

        const spcanbaohanh = new Spcanbaohanh(formData);

        spcanbaohanh.save()
            .then(() =>res.redirect('/daily/spcanbaohanh'))
            .catch(next);
    }

    deletespbh(req, res, next) {
        Spcanbaohanh.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    showspcanbaohanh(req, res, next){
        
        Spcanbaohanh.find({})
            .then(Spcanbaohanh => {
                res.render('Daily\\spcanbaohanh', {
                    Spcanbaohanh: mutipleMongooseToObject(Spcanbaohanh)
                });
            })
            .catch(next);
    }


    showspdabaohanh(req, res,next){
        Spdabaohanh.find({})
            .then(Spdabaohanh => {
                res.render('Daily\\spdabaohanh', {
                    Spdabaohanh: mutipleMongooseToObject(Spdabaohanh)
                });
            })
            .catch(next);
    }


    thongkesoluongsp(req, res,next){
 
        Thongkesoluong.find({})
            .then(Thongkesoluong => {
                res.render('Daily\\soluongsp', {
                    Thongkesoluong: mutipleMongooseToObject(Thongkesoluong)
                });
            })
            .catch(next);
    }

    thongkeloaisp(req, res, next){

        Thongkeloaisp.find({})
            .then(Thongkeloaisp => {
                res.render('Daily\\thongkeloaisp', {
                    Thongkeloaisp: mutipleMongooseToObject(Thongkeloaisp)
                });
            })
            .catch(next);
    }


    daban(req, res,next){

        Daban.find({})
            .then(Daban => {
                res.render('Daily\\spdaban', {
                    Daban: mutipleMongooseToObject(Daban)
                });
            })
            .catch(next);
    }

    chuaban(req, res,next){

        Chuaban.find({})
            .then(Chuaban => {
                res.render('Daily\\spchuaban', {
                    Chuaban: mutipleMongooseToObject(Chuaban)
                });
            })
            .catch(next);
    }

    travecoso(req, res,next){

        Travecoso.find({})
            .then(Travecoso => {
                res.render('Daily\\travecssx', {
                    Travecoso: mutipleMongooseToObject(Travecoso)
                });
            })
            .catch(next);
    }

    themtravecoso(req, res,next){

    
                res.render('Daily\\themsptrave');
    }

    themtrave(req, res,next){
        const formData = req.body;

        const travecoso = new Travecoso(formData);

        travecoso.save()
            .then(() =>res.redirect('travecoso'))
            .catch(next);
    }

    deletesptrave(req, res, next) {
        Travecoso.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}


module.exports = new DailyController;

