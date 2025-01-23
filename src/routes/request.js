const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth");


requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  console.log("Sending a connection request");

  res.send("Connection Request Sent!");
});

module.exports = requestRouter;