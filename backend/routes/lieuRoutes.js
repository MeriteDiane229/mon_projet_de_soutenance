const express = require("express");
const router = express.Router();
const {
  createLieu,
  getAllLieux,
  getLieuById,
  updateLieu,
  deleteLieu,
} = require("../controllers/lieuController");

// ➕ Ajouter un lieu
router.post("/", createLieu);

// 📋 Tous les lieux
router.get("/", getAllLieux);

// 🔍 Lieu par ID
router.get("/:id", getLieuById);

// ✏️ Modifier un lieu
router.put("/:id", updateLieu);

// ❌ Supprimer un lieu
router.delete("/:id", deleteLieu);

module.exports = router;
