const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rvrevamth1:revamth@devtinder.tag55.mongodb.net/myDatabase", // Add your database name here.
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1); // Exit the app if the connection fails.
  }
};

module.exports = connectDB;
