const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");
const isAuth = require("../middleware/isAuth");

// signup function
const signup = async (req, res) => {
  const { name, email, password, confirm } = req.body;

  if (!name || !email || !password || !confirm)
    return res.json({
      msg: "none of the fields can be empty"
    });

  if (password !== confirm) return res.json("passwords do not match");

  if (!validator.isEmail(email)) return res.json({ msg: "must be an email" });

  // check whether the user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.json({ msg: "the user already exists" });

  const user = await new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

  return res.json({ msg: "user account successfully created" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(401).json({ msg: "values cannot be empty" });
  // filter by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ msg: "no such user exists" });
  }

  const doesMatch = await bcrypt.compare(password, user.password);

  if (doesMatch) {
    const payload = {
      user: {
        id: user.id
      }
    };

    // create a new token
    const token = jwt.sign(payload, config.jwtKey, {
      algorithm: "HS256"
      // expiresIn: config.jwtExpirySecond
    });

    res.cookie("token", token);
    res.json({
      msg: "you are now successfully logged in",
      user: { name: user.name, id: user.id }
    });
  } else {
    res.json({ msg: "password or username does not match" });
  }       
};

const getUser = (req, res) => {
  // todo get current user and check
  return res.json({ user: { id: req.payload.id } });
};

module.exports = { signup, login, getUser };
