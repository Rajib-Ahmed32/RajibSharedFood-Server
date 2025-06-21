const Food = require("../models/Food");

const addFood = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredAt,
      additionalNotes,
      donorName,
      donorEmail,
      donorImage,
    } = req.body;

    const newFood = new Food({
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredAt,
      additionalNotes,
      donorName,
      donorEmail,
      donorImage,
    });

    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    console.error("Error adding food:", error.message);
    res.status(500).json({ error: "Failed to add food" });
  }
};

const availableFoods = async (req, res) => {
  try {
    const foods = await Food.find({ foodStatus: "available" }).sort({
      expiredAt: 1,
    });
    res.status(200).json(foods);
  } catch (error) {
    console.error("Error fetching available foods:", error);
    res.status(500).json({ message: "Server error fetching available foods" });
  }
};

module.exports = {
  addFood,
  availableFoods,
};
