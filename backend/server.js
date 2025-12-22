const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ READ FROM ENV (THIS IS THE FIX)
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/meanapp";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
// Root route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Backend is healthy" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
