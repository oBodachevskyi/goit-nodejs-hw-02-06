const { NotFound } = require("http-errors");

const contactsOperation = require('../../models/contacts')

const removeById = async(req, res) => {
    const {contactId} = req.params;
    const contact = await contactsOperation.removeContact(contactId)
    if(!contact) {
        throw new NotFound(`Contact with id '${contactId}' not found`);       
    }    
    res.json({
        code: 200,
        result: "Contact deleted"
    })   
   
}

module.exports = removeById;

