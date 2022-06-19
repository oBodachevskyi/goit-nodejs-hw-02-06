const getAll = require("./getAll");
const getContactById =require("./getContactById");
const addContact = require('./addContact');
const removeById = require("./removeById");
const updateById = require('./updateById');
const updateStatusContact = require('./updateStatusContact')

module.exports = {
    getAll,
    getContactById, 
    addContact,
    removeById,    
    updateById,
    updateStatusContact
}