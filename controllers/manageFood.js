const Food = require("../models/Food");
const myDonatedFoods = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const foods = await Food.find({
      donorEmail: userEmail,
      foodStatus: "available",
    });
    res.status(200).json(foods);
  } catch (error) {
    console.error("Error fetching donated foods:", error);
    res.status(500).json({ message: "Server error fetching donated foods" });
  }
};

const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFood = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.status(200).json(updatedFood);
  } catch (error) {
    console.error("Error updating food:", error);
    res.status(500).json({ message: "Server error updating food" });
  }
};

const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    console.error("Error deleting food:", error);
    res.status(500).json({ message: "Server error deleting food" });
  }
};

module.exports = {
  myDonatedFoods,
  updateFood,
  deleteFood,
};
