const express = require("express");
const router = express.Router();

const {
  createGuide,
  getAllGuides,
  getGuideById,
  updateGuide,
  deleteGuide,
} = require("../controllers/guideController");

// ➕ Ajouter un guide
router.post("/", createGuide);

// 📋 Récupérer tous les guides
router.get("/", getAllGuides);

// 🔍 Récupérer un guide par ID
router.get("/:id", getGuideById);

// ✏️ Modifier un guide
router.put("/:id", updateGuide);

// ❌ Supprimer un guide
router.delete("/:id", deleteGuide);

module.exports = router;
