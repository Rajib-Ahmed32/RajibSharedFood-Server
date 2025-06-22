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
    res
      .status(500)
      .json({ message: "Server error for fetching available foods" });
  }
};

const getSingleFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.json(food);
  } catch (error) {
    console.error("Error fetching food by ID:", error.message);
    res.status(500).json({ message: "Server error while fetching food" });
  }
};

const requestFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { foodStatus, additionalNotes, requesterEmail, requestDate } =
      req.body;

    const updatedFood = await Food.findByIdAndUpdate(
      id,
      {
        foodStatus,
        additionalNotes,
        requesterEmail,
        requestDate,
      },
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error("Error updating food status:", error.message);
    res.status(500).json({ message: "Server error while updating food" });
  }
};

module.exports = {
  addFood,
  availableFoods,
  getSingleFood,
  requestFood,
};
