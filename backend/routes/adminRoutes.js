const express = require("express");
const { createGuide } = require("../controllers/adminController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create-guide", protect, authorizeRoles("admin"), createGuide);

module.exports = router;
