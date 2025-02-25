const {Unauthorized} = require("http-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { createError } = require("../../helpers");

const {User} = require("../../models");

const {SECRET_KEY} = process.env;

const login = async(req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw createError(401, `Email ${email} not found`);
    }
    if (!user.verify) {
        throw createError(401, "Email ${email} not verify")
    }
    const passCompare = bcrypt.compareSync(password, user.password);
    if(!passCompare){
        throw new createError(401, "Password wrong");
    }
   
    const payload = {
        id: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    await User.findByIdAndUpdate(user._id, {token});
    res.json({
        status: "success",
        code: 200,
        user: {
            email,
            subscription: user.subscription,
           
        },
        token: {
            token
        }
    })


}

module.exports = login;