const express = require('express');

const {validation, ctrlWrapper, auth} = require("../../middlewares");
const {users: ctrl} = require('../../controlers');

const {joiRegisterSchema, joiLoginSchema} = require("../../models/user");


const router = express.Router();

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;