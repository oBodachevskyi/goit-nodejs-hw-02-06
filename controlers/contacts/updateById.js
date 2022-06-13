const { NotFound } = require("http-errors");

const contactsOperation = require('../../models/contacts')

const updateById = async (req, res,) => {

    const {contactId} = req.params;
    const body = req.body;
    const contact = await contactsOperation.updateContact(contactId, body);
    if(!contact) {
        throw new NotFound(`Contact with id '${contactId}' not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
          result: contact
      }
    })

}

module.exports = updateById;