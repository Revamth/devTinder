const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  // Read the token from req cookies
  try {
    const { token } = req.cookies;
    if(!token) {
      throw new Error("Token is not Valid!!");
    }

    const decodedObj = await jwt.verify(token, "Revamth@261205");

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR" + err.message);
  }
};

module.exports = {
  userAuth,
};
