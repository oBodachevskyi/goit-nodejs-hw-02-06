const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const {User} = require("../../models");

const signup = async(req,res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict(`User with ${email} already exist`)
    }
    const avatarURL = gravatar.url(email);
    newUser = {
        name, 
        email,
        setPassword(password){
            this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        },
        avatarURL
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
       const result = await User.create({name, email, password: hashPassword});
    
    res.status(201).json({
        status: "success",
        code: 201,
        user: {
                email,
                subscription: result.subscription,
                avatarURL,
        }
    });
}

module.exports = signup;