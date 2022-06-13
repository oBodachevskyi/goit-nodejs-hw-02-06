const { nanoid } =  require ("nanoid");
const fs = require('fs/promises');
const listContacts = require('./listContacts');
const updateContactsList = require('./updateContactsList');

const addContact = async ({name, email, phone}) => {
    const contactsList = await listContacts();
    const newItem = {
        id: String(nanoid()),
        name: `${name}`,
        email: `${email}`,
        phone: `${phone}`
    }
    contactsList.push(newItem);
    updateContactsList(contactsList)
    return newItem 
  }

  module.exports = addContact;