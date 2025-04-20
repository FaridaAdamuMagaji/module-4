require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const flowerRoutes = require('./routes/flowerRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets"))); // Serve uploaded images

// Routes
app.use("/api", flowerRoutes);
app.use("/api/auth", authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, world! Backend is running!');
});

// Connect to MongoDB
const mongo = process.env.MONGO_URI;
mongoose.connect(mongo)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Optional: Fetch all users (for admin/debug, not recommended in production)
const User = require('./models/user');
app.get('/users', async (req, res) => {
  console.log("GET /users hit");
  try {
    const users = await User.find({}, '-password'); // omit password field
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




