const Sptrave = require("../models/cssx/Sptrave");
const Xuatsp = require("../models/cssx/Xuatsp");
const Khosp = require("../models/cssx/Khosp");
const Spchay = require("../models/cssx/Spbanchay");
const SpDailyvsCoso = require("../models/SpDaiLyvsCoso");
const {mutipleMongooseToObject} = require("../../until/mongoose");
const User = require("../models/User");
const bcrypt = require('bcrypt');


class CosoController {
    showdangnhap(req, res) {
        res.render('Cososx\\csdn');
    };

    show(req, res) {
        res.render('Cososx\\dkcs');
        
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
                role: "cơ sở",
            });

            result.save();


            res.redirect('/coso/dangnhap');
    
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Something went wrong"});
        }

    }

    async login(req, res, next){
        var username = req.body.username;
        var password = req.body.password;
        console.log(password);
        try{
            const existingUser = await User.findOne({
                username: username
            });
            const matchPassword = bcrypt.compare(password, existingUser.password);
            if((!matchPassword) || existingUser.role !== "cơ sở"){               
                res.status(400).json({message: "Invalid Credentails"});
            }
            if(existingUser && matchPassword) {
                res.redirect('/coso')
                
            }            
        } catch(error) {
            console.log(error);
            res.status(500).json({message: "Something went wrong"})
        }       
    }
    

    index(req, res, next){
        //res.render('Cososx\\cososanxuat');
        Khosp.find({})
            .then(Khosp => {
                res.render('Cososx\\cososanxuat', {
                    Khosp: mutipleMongooseToObject(Khosp)
                });
            })
            .catch(next);
    };


    showSptrave(req, res, next) {
        Sptrave.find({})
            .then(Sptrave => {
                res.render('Cososx\\sptrave', {
                    Sptrave: mutipleMongooseToObject(Sptrave)
                });
            })
            .catch(next);
    };

    

    showXuatsp(req, res, next) {
        SpDailyvsCoso.find({})
            .then(SpDailyvsCoso => {
                res.render('Cososx\\xuatsp', {
                    SpDailyvsCoso: mutipleMongooseToObject(SpDailyvsCoso)
                });
            })
            .catch(next);
    };

    

    showThongke(req, res, next) {
        Spchay.find({})
            .then(Spchay => {
                res.render('Cososx\\thongke', {
                    Spchay: mutipleMongooseToObject(Spchay)
                });
            })
            .catch(next);
    };

    Addkho(req, res, next){
        res.render('Cososx\\themkho');
    };

    Showkho(req, res, next) {
        const formData = req.body;
        const khosp = new Khosp(formData);

        khosp.save()
            .then(() =>res.redirect('/coso'))
            .catch(next);
        
    }

    delete(req, res, next) {
        Khosp.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    themspxuat(req, res, next) {
        res.render('Cososx\\themxuatsp');
    }


    spxuat(req, res, next) {
        const formData = req.body;

        const spxuat = new SpDailyvsCoso(formData);

        spxuat.save()
            .then(() =>res.redirect('xuatsp'))
            .catch(next);
    }

    xuatsp(req, res, next) {
        
        SpDailyvsCoso.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CosoController;

