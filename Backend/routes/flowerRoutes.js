const express = require("express");
const multer = require("multer");
const path = require("path");
const Flower = require("../models/flowerModel");

const router = express.Router();

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: "./assets",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// POST route to upload image and create a flower
router.post("/flowers", upload.single("image"), async (req, res) => {
    try {
        const { name, description, category, price } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image file is required" });
        }

        const image = `/assets/${req.file.filename}`;

        if (!name || !description || !category || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const flower = new Flower({ name, description, category, price, image });
        const savedFlower = await flower.save();

        res.status(201).json(savedFlower);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET all flowers
router.get("/flowers", async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.status(200).json(flowers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single flower by ID
router.get("/flowers/:id", async (req, res) => {
    try {
        const flower = await Flower.findById(req.params.id);
        if (!flower) {
        return res.status(404).json({ message: "Flower not found" });
        }
        res.status(200).json(flower);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE a flower by ID
router.put("/flowers/:id", upload.single("image"), async (req, res) => {
    try {
        const { name, description, category, price } = req.body;
        let updateData = { name, description, category, price };

        if (req.file) {
            updateData.image = `/assets/${req.file.filename}`;
        }

        const updatedFlower = await Flower.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedFlower) {
            return res.status(404).json({ message: "Flower not found" });
        }

        res.status(200).json(updatedFlower);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE a flower by ID
router.delete("/flowers/:id", async (req, res) => {
    try {
        cons t deletedFlower = await Flower.findByIdAndDelete(req.params.id);
        if (!deletedFlower) {
            return res.status(404).json({ message: "Flower not found" });
        }
        res.status(200).json({ message: "Flower deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
