const fs = require('fs/promises');
const listContacts = require('./listContacts');
const updateContactsList = require('./updateContactsList');

const updateContact = async (id, body) => {
    const contactsList = await listContacts();
    const idx = contactsList.findIndex(item => item.id === String(id))
    if(idx === -1) {
        return null
    }
      contactsList[idx] = {id, ...body};
      await updateContactsList(contactsList);
      return contactsList[idx];
  }

  module.exports = updateContact;