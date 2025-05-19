const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    langues: {
      type: [String], // Ex: ["Français", "Anglais"]
      required: true,
    },
    biographie: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    photo: {
      type: String, // URL de la photo du guide
    },
    experience: {
      type: Number, // Années d'expérience
      default: 0,
    },
    disponible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Guide", guideSchema);
