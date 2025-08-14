const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const AppError = require("./utils/AppError");
const errorHandler = require("./middlewares/errorHandler");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.get("/", async (req, res, next) => {
  try {
    res.send("Hello Friend");
  } catch (err) {
    next(err);
  }
});

app.get("/welcome", async (req, res, next) => {
  try {
    res.send("Welcome buddy");
  } catch (err) {
    next(err);
  }
});

app.get("/catName", async (req, res, next) => {
  try {
    res.send("I am a cat whose name is Monty");
  } catch (err) {
    next(err);
  }
});

// 404 handler (Express 5 compatible)
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Global error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
