const fs = require('fs/promises');
const listContacts = require('./listContacts');


const getContactById = async (id) => {
    const contactsList = await listContacts();
    const result = contactsList.find(item => item.id === String(id))
    if(!result) {
        return null;
    }
    return result
  }

  module.exports = getContactById;