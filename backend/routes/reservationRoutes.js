const express = require("express");
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationController");

// ➕ Créer une réservation
router.post("/", createReservation);

// 📋 Récupérer toutes les réservations
router.get("/", getAllReservations);

// 🔍 Obtenir une réservation par ID
router.get("/:id", getReservationById);

// ✏️ Modifier une réservation
router.put("/:id", updateReservation);

// ❌ Supprimer une réservation
router.delete("/:id", deleteReservation);

module.exports = router;
