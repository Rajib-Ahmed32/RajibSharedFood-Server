const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
    foodImage: { type: String, required: true },
    foodQuantity: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    expiredAt: { type: Date, required: true },
    additionalNotes: { type: String },
    donorName: { type: String, required: true },
    donorEmail: { type: String, required: true },
    donorImage: { type: String },
    foodStatus: { type: String, default: "available" },
    requesterEmail: { type: String },
    requesterEmail: { type: String },
    requestDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
