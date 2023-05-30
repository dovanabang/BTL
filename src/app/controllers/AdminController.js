const User = require("../models/User");
const Mathang = require("../models/Mathang");
const {mutipleMongooseToObject} = require("../../until/mongoose");
const { mongooseToObject } = require("../../until/mongoose");
const { render } = require("node-sass");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { token } = require("morgan");
const SCECET_KEY = "NOTESAPI";

class AdminController {



    index(req, res, next){
        res.render('Admin\\admin');
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
                role: "admin",
            });
            result.save();
            res.status(200).json(result);    
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
            if((!matchPassword) || existingUser.role !== "admin") {               
                res.status(400).json({message: "Invalid Credentails"});
            }
            if(existingUser && matchPassword) {
                // res.json(existingUser);
                Mathang.find({})
                .then(Mathang => {
                    res.render('Admin\\adminlogin', {
                        Mathang: mutipleMongooseToObject(Mathang)
                    });
                })
                .catch(next);
            }            
        } catch(error) {
            console.log(error);
            res.status(500).json({message: "Something went wrong"})
        }       
    }

    show(req, res, next) {
        Mathang.find({})
            .then(Mathang => {
                res.render('Admin\\adminlogin', {
                    Mathang: mutipleMongooseToObject(Mathang)
                });
            })
            .catch(next);
    };

    showQuanlisp(req, res, next) {
        Mathang.find({})
            .then(Mathang => {
                res.render('Admin\\quanlisp', {
                    Mathang: mutipleMongooseToObject(Mathang)
                });
            })
            .catch(next);
    };

    Addsp(req, res, next){
        res.render('admin\\themsp')
    };


    Sua(req, res, next){
 
        Mathang.findById(req.params.id)
            .then(Mathang => {
                res.render('admin\\Suasp', {
                    Mathang: mongooseToObject(Mathang)
                });
            })
            .catch(next);
    };

    Showsp(req, res, next) {
        const formData = req.body;
        const mathang = new Mathang(formData);
        mathang.save();
        res.redirect('quanlisp');
    }


    update(req, res, next) {

        Mathang.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/quanlisp'))
            .catch(next);
    }


    delete(req, res, next) {
        Mathang.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    themBaohanh(req, res, next) {
        res.render('Admin\\themUserBaohanh');
    }

    themDaily(req, res, next) {
        res.render('Admin\\themUserDaily');
    }

    themCoso(req, res, next) {
        res.render('Admin\\themUserCoso');
    }

    dathemDaily(req, res, next) {
        const {username, email, password} = req.body;     
        try{
            const salt = bcrypt.genSalt(10);               
            const hashedPW = bcrypt.hashSync (password, parseInt(salt));
            const  result = new User({
                username: username,
                password: hashedPW,
                email: email,
                role: "Đại lý",
            });
            result.save();
            res.redirect('/admin/quanlitk');
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Something went wrong"});
        }
    }

    dathemBaohanh(req, res, next) {
        const {username, email, password} = req.body;     
        try{
            const salt = bcrypt.genSalt(10);               
            const hashedPW = bcrypt.hashSync (password, parseInt(salt));
            const  result = new User({
                username: username,
                password: hashedPW,
                email: email,
                role: "Bảo hành",
            });
            result.save();
            res.redirect('/admin/quanlitk');
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Something went wrong"});
        }
    }

    dathemCoso(req, res, next) {
        const {username, email, password} = req.body;     
        try{
            const salt = bcrypt.genSalt(10);               
            const hashedPW = bcrypt.hashSync (password, parseInt(salt));
            const  result = new User({
                username: username,
                password: hashedPW,
                email: email,
                role: "Cơ sở",
            });
            result.save();
            res.redirect('/admin/quanlitk');
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Something went wrong"});
        }
    }

    quanlitk(req, res, next) {
        User.find({})
            .then(User => {
                res.render('Admin\\quanlitaikhoan', {
                    User: mutipleMongooseToObject(User)
                });
            })
            .catch(next);
    }

    deletetk(req, res, next) {
        User.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new AdminController;

