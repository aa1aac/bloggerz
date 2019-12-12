const express = require("express");

const UserController = require("../Controller/UserController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.post("/signup", UserController.signup); // signup route api/user/signup       POST

router.post("/login", UserController.login); // login route api/user/login       POST

router.get("/", isAuth, UserController.getUser); // getCurrentUser route api/user/   GET  private

// router.get("/refresh", isAuth, UserController.refresh); // rote api/user/referesh    GET private

module.exports = router;
