const express = require("express");
const {
  getUsers,
  signupUser,
  loginUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/authMiddleWare");

const router = express.Router();

// User Routes
router.get("/", authenticate, getUsers);
router.post("/signup", signupUser);
router.post("/login", loginUser);

// Admin Routes
router.post("/create", authenticate, authorize("admin"), createUser);
router.put("/:id", authenticate, authorize("admin"), updateUser);
router.delete("/:id", authenticate, authorize("admin"), deleteUser);

module.exports = router;
