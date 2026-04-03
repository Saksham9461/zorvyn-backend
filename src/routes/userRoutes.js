const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/", userCtrl.getUsers);

module.exports = router;