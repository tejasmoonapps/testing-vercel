const express = require("express");
const AppError = require("../utils/AppError");
const catchAsync = require("../middlewares/catchAsync");

const router = express.Router();

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/about", (req, res) => {
  res.send("About users");
});

router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    // Simulate DB lookup
    if (id !== "123") {
      return next(new AppError("User not found", 404));
    }

    res.json({ success: true, data: { id, name: "John Doe" } });
  })
);

module.exports = router;
