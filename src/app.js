const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({firstName: "Akshay"})
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, (req, res) => {
  console.log("Server is successfully listening on port 7777....")
});