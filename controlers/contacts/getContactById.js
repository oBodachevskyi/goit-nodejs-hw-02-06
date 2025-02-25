const { NotFound } = require("http-errors");

const {Contact} = require("../../models");

const getContactById = async(req, res) => {
    const {contactId} = req.params;
    const contact = await Contact.findById(contactId).populate("owner", "id name email")
    if (!contact) {
        throw new NotFound(`Contact with id '${contactId}' not found`);       
    } 
    res.json({
        status: "success",
        code: 200,
        data: {
          result: contact
        }
      });
   
}

module.exports = getContactById;