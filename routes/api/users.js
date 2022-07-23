const express = require('express');

const {validation, ctrlWrapper, auth, upload} = require("../../middlewares");
const {users: ctrl} = require('../../controlers');

const {joiRegisterSchema, joiLoginSchema, JoiEmailSchema} = require("../../models/user");


const router = express.Router();

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail))

 router.post("/verify", validation(JoiEmailSchema), ctrlWrapper(ctrl.resendVerifyEmail))

module.exports = router;