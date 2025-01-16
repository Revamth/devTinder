const express = require("express");
require("./config/database");
const app = express();

app.listen(7777, (req, res) => {
  console.log("Server is successfully listening on port 7777....");
});
