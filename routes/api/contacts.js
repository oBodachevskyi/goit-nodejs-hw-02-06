const express = require('express');
const {validation, ctrlWrapper} = require("../../middlewares");
const {joiSchema, favoriteJoiSchema} = require("../../models/contact");
const {contacts: ctrl} = require('../../controlers')


const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', validation(joiSchema), ctrlWrapper(ctrl.updateById)); 

router.patch('/:contactId/favorite', validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateStatusContact) )

module.exports = router
