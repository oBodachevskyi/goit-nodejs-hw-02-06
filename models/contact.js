const {Schema, model} =require("mongoose");
const Joi = require("joi");
const { boolean } = require("joi");

const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      favorite: {
        type: Boolean,
        default: false,
      },
}, {versionKey: false, timestamps: true}); 

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.string().required(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': `missing field favorite`
  })
})

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    joiSchema,
    favoriteJoiSchema
}

