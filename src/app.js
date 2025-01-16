const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./modules/user");

app.post("/signup", async (req, res) => {

  const user = new User({
    firstName: "Revamth",
    lastName: "Raja",
    emailId: "rvrevamth@gmail.com",
    password: "revamth123",
});

  await user.save();
  res.send("User added Successfully!");
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, (req, res) => {
      console.log("Server is successfully listening on port 7777....");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
