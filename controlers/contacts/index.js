const getAll = require("./getAll");
const getContactById =require("./getContactById");
const removeById = require("./removeById");
const addContact = require('./addContact');
const updateById = require('./updateById')

module.exports = {
    getAll,
    getContactById, 
    removeById,
    addContact,
    updateById   
}