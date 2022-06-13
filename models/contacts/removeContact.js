const fs = require('fs/promises');
const listContacts = require('./listContacts');
const updateContactsList = require('./updateContactsList')

const removeContact = async (id) => {
    const contactsList = await listContacts();
    const idx = contactsList.findIndex(item => item.id === String(id))
    if(idx === -1) {
        return null
    }
    const newContactsList = contactsList.filter((_, index) => index !== idx)
    await updateContactsList(newContactsList)
    return contactsList[idx];
  }

  module.exports = removeContact;