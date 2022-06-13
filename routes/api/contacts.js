const express = require('express');
const {validation, ctrlWrapper} = require("../../middlewares");
const {contactSchema} = require("../../schemas");
const {contacts: ctrl} = require('../../controlers')

const validateMiddleware = validation(contactSchema);
const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', validateMiddleware, ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', validateMiddleware, ctrlWrapper(ctrl.updateById));

module.exports = router
