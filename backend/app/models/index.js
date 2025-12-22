const mongoose = require("mongoose");

// Prevent deprecation warning
mongoose.set("strictQuery", false);

// IMPORTANT: Use Docker service name, not localhost
const DB_URL = process.env.MONGO_URI || "mongodb://mongodb:27017/meanapp";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

module.exports = {
  mongoose,
};
