const {Contact} = require("../../models");

const getAll = async(req, res) => {
    const {_id} = req.user;
    console.log(req.query.favorite)
    const {page = 1, limit = 20, favorite = ""} = req.query;
    const skip = (page - 1) * limit;
    const contacts = await Contact.find({owner: _id, favorite: favorite}, "", {skip, limit: Number(limit)}).populate("owner", "id name email");
    res.json({
        status: "success",
        code: 200,
        data: {
            result: contacts
        }
    }); 
};

module.exports = getAll;