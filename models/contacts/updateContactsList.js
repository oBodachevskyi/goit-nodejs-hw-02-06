const fs = require('fs/promises');
const path = require("path"); 

const contactsPath = path.join(__dirname, "contacts.json") ;

const updateContactsList = async(contactsList)=> {
    await fs.writeFile(contactsPath, JSON.stringify(contactsList));
  }

module.exports = updateContactsList;