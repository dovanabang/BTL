const Spkhongsua = require("../models/trungtambh/Spkhongsua");
const Spdasua = require("../models/trungtambh/Spdasua");
const Spbaohanh = require("../models/trungtambh/Spbaohanh");
const Thongke = require("../models/trungtambh/Thongke");
const {mutipleMongooseToObject} = require("../../until/mongoose");
const User = require("../models/User");
const bcrypt = require('bcrypt');

class BaohanhController {
    showdangnhap(req, res) {
        res.render('trungtambh\\hbdn');
    };

    show(req, res) {
        res.render('trungtambh\\dkbh');
    };

    index(req, res){
        res.render('trungtambh\\trungtambaohanh');
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
                role: "bảo hành",
            });
            result.save();
            res.redirect('/baohanh/dangnhap')
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
            if((!matchPassword) || existingUser.role !== "bảo hành") {
                
                res.status(400).json({message: "Invalid Credentails"});
            }

            if(existingUser && matchPassword) {
                res.redirect('/baohanh')
            } 


            
        } catch(error) {
            console.log(error);
            res.status(500).json({message: "Something went wrong"})
        }
         
        
    }

    showSpkhongsua(req, res, next) {
        Spkhongsua.find({})
            .then(Spkhongsua => {
                res.render('trungtambh\\sphong', {
                    Spkhongsua: mutipleMongooseToObject(Spkhongsua)
                });
            })
            .catch(next);
    };

    showSpdasua(req, res, next) {
        Spdasua.find({})
            .then(Spdasua => {
                res.render('trungtambh\\spdasua', {
                    Spdasua: mutipleMongooseToObject(Spdasua)
                });
            })
            .catch(next);
    };

    showSpbaohanh(req, res, next) {
        Spbaohanh.find({})
            .then(Spbaohanh => {
                res.render('trungtambh\\trungtambaohanh', {
                    Spbaohanh: mutipleMongooseToObject(Spbaohanh)
                });
            })
            .catch(next);
    };

    showThongke(req, res, next) {
        Thongke.find({})
            .then(Thongke => {
                res.render('trungtambh\\thongke', {
                    Thongke: mutipleMongooseToObject(Thongke)
                });
            })
            .catch(next);
    };


    Addsphong(req, res, next){
        res.render('trungtambh\\themsphong');
    };

    Showsphong(req, res, next) {
        const formData = req.body;

        const spkhongsua = new Spkhongsua(formData);

        spkhongsua.save()
            .then(() =>res.redirect('/baohanh/sphong'))
            .catch(next);
        
    }

    delete(req, res, next) {
        Spkhongsua.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new BaohanhController;

