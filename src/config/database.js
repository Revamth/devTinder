const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rvrevamth1:revamth@devtinder.tag55.mongodb.net/myDatabase",
      {
      }
    );
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
