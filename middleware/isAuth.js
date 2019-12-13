const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, config.jwtKey);
    req.payload = decoded.user;
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }

  next();
};
