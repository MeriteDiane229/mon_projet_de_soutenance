const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    clientNom: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    clientTelephone: {
      type: String,
    },
    dateReservation: {
      type: Date,
      required: true,
    },
    lieu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lieu", // si un lieu est concerné
    },
    guide: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide", // si un guide est concerné
    },
    statut: {
      type: String,
      enum: ["en attente", "confirmée", "annulée"],
      default: "en attente",
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", reservationSchema);
