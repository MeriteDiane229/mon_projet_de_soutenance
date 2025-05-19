// routes/protected.js
const express = require("express");
const router = express.Router();
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.get("/", protect, (req, res) => {
  res.json({ message: "Route protégée OK", utilisateur: req.user });
});

router.get("/admin-only", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Accès admin validé" });
});

module.exports = router;
