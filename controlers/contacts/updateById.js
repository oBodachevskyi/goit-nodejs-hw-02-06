const { NotFound } = require("http-errors");

const {Contact} = require("../../models");

const updateById = async (req, res,) => {

    const {contactId} = req.params;
    const body = req.body;
    const contact = await Contact.findByIdAndUpdate(contactId, body, {new:true});
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