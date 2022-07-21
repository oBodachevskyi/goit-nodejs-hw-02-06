
const {User} = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require('jimp');

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async(req, res)=> {
    const {path: tempUpload, originalname} = req.file;
    const {_id: id} = req.user;
    const imageName =  `${id}_${originalname}`;
    try {
        const resultUpload = path.join(avatarsDir, imageName);
        await fs.rename(tempUpload, resultUpload);
        const avatarUrl = path.join("public", "avatars", imageName);
        
        Jimp.read(avatarUrl, (err, imageName) => {
            if (err) throw err;
            imageName
              .resize(250, 250)
              .write(avatarUrl); // save
          });

        await User.findByIdAndUpdate(req.user._id, {avatarUrl});
        res.json({avatarUrl});
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    }
};

module.exports = updateAvatar;

