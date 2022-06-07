const express = require('express');
const contactsOperation = require('../../models/contacts')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperation.listContacts();
    res.json({
        status: "success",
        code: 200,
        data: {
            result: contacts
        }
    });
} catch (error) {
   /*  next(error); */
    res.status(500).json({
    status: "error",
    code: 500,
    message: "Server error"
    })
}
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const contact = await contactsOperation.getContactById(contactId)
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contact
      }
    })
  } catch (error) {
    console.log(error)
  }
  
})

router.post('/', async (req, res, next) => {
 try {
  const contact = await contactsOperation.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
          result: contact
      }
 })
} 
 catch (error) {
  next(error);
 }
})

router.delete('/:contactId', async (req, res, next) => {
 try {
  const {contactId} = req.params;
  const contact = await contactsOperation.removeContact(contactId)
  if(contact === null) {
    res.status(404).json(
       "Not found"
    )   
  }
  if(contact !== null) {
    res.json({
      code: 200,
      result: "Contact deleted"
    })   
  }
 } catch (error) {
   next(error)
 }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const body = req.body;
    console.log(body)
    const contact = await contactsOperation.updateContact(contactId, body);
    res.json({
      status: "success",
      code: 200,
      data: {
          result: contact
      }
    })
  } catch (error) {
    
  }
})

module.exports = router
