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

module.exports = { addFood };
