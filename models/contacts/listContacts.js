const fs = require('fs/promises');
const path = require("path"); 

const contactsPath = path.join(__dirname, "contacts.json") ;

const listContacts = async () => {
  const data = await fs.readFile(contactsPath)
  const contactsList = JSON.parse(data)
  return contactsList
}



module.exports = listContacts;