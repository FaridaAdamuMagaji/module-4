require ('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const flowerRoutes = require('./routes/flowerRoutes');
        
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets"))); // Serve uploaded images

// Routes
app.use("/api", flowerRoutes);

//Root route
app.get('/', (req, res) => {
    res.send('Hello, world! Backend is running!');
    });


const mongo= 'mongodb+srv://faridaadamumagaji:ORVooYt83cHv1DF4@flower.vuwuq.mongodb.net/?retryWrites=true&w=majority&appName=flower';
mongoose.connect(mongo)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



