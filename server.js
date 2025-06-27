const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const foodRoutes = require("./routes/foodRoutes");
const authRoutes = require("./routes/authRoutes");
const availableFoodsRoutes = require("./routes/availableFoodRoutes");

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/foods", foodRoutes);
app.use("/api/available-foods", availableFoodsRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });
