const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User added Successfully!");
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({emailId: userEmail});
    res.send(user);
  }
  catch(err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({});
    res.send(user);
  }
  catch(err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  }
  catch(err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({_id: userId}, data);
    res.send("User Updated successfully");
  }
  catch(err) {
    res.status(400).send("Something went wrong");
  }
})

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
