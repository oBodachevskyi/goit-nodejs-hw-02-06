const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const idGenerate = require('bson-objectid');
const { createError, sendMail } = require("../../helpers");

const {User} = require("../../models");

const signup = async(req,res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw createError(409, "Email in use")
    }
    const avatarURL = gravatar.url(email);
    const verificationToken = idGenerate()
    const mail = {
        to: email,
        subject: "Подтверждение регистрации на сайте",
        html: `<a target="_blank" href="http://localhost:4000/api/auth/verify/${verificationToken}">
            Нажмите для подтверждения Email
        </a>`
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const result = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});
    
    res.status(201).json({
        user: {
            email: result.email,
            subscription: result.subscription,
        }
    })
    await sendMail(mail)
}

module.exports = signup;