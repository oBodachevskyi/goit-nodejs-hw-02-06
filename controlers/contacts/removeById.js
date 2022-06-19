const { NotFound } = require("http-errors");

const {Contact} = require("../../models");

const removeById = async(req, res) => {
    const {contactId} = req.params;
    const contact = await Contact.findByIdAndRemove(contactId)
    if(!contact) {
        throw new NotFound(`Contact with id '${contactId}' not found`);       
    }    
    res.json({
        code: 200,
        result: "Contact deleted"
    })   
   
}

module.exports = removeById;

