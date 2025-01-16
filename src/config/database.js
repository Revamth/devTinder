const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rvrevamth1:<revamth>@devtinder.tag55.mongodb.net/"
  );
};

connectDB()
  .then(() => {
    console.log("Database connection established...");
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
