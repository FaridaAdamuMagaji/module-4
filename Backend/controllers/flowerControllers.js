const Flower = require("../models/flowerModel");

// Create a new flower
const createFlower = async (req, res) => {
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
};

// Get all flowers
const getAllFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.status(200).json(flowers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single flower by ID
const getFlowerById = async (req, res) => {
    try {
        const flower = await Flower.findById(req.params.id);
        if (!flower) {
            return res.status(404).json({ message: "Flower not found" });
    }
    res.status(200).json(flower);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a flower by ID
const updateFlower = async (req, res) => {
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
};

// Delete a flower by ID
const deleteFlower = async (req, res) => {
    try {
        const deletedFlower = await Flower.findByIdAndDelete(req.params.id);
        if (!deletedFlower) {
            return res.status(404).json({ message: "Flower not found" });
        }
        res.status(200).json({ message: "Flower deleted successfully" });
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createFlower,
    getAllFlowers,
    getFlowerById,
    updateFlower,
    deleteFlower,
};
