const mongoose = require("mongoose");

const lieuSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    localisation: {
      type: String,
      required: true,
    },
    image: {
      type: String, // URL de l'image
      required: true,
    },
    categorie: {
      type: String, // Ex: "historique", "culturel", "spirituel"
      default: "culturel",
    },
    prix: {
      type: Number,
      default: 0, // Prix pour la visite (facultatif)
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lieu", lieuSchema);
