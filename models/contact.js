const {Schema, model} =require("mongoose");
const Joi = require("joi");
const { boolean, any } = require("joi");


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
      } ,      
        owner: {
          type: Schema.Types.ObjectId,
          ref: "user",
          required: true
      },
      
}, {versionKey: false, timestamps: true}); 

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required()
    .email({ minDomainSegments: 2 }),
    phone: Joi.string().required(),
    favorite: Joi.any()
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

