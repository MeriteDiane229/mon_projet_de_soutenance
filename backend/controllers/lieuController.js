const Lieu = require("../models/Lieu");

// ➕ Créer un nouveau lieu
exports.createLieu = async (req, res) => {
  try {
    const { nom, description, localisation, image, categorie, prix } = req.body;
    const newLieu = new Lieu({ nom, description, localisation, image, categorie, prix });
    const savedLieu = await newLieu.save();
    res.status(201).json(savedLieu);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du lieu.", error });
  }
};

// 📋 Récupérer tous les lieux
exports.getAllLieux = async (req, res) => {
  try {
    const lieux = await Lieu.find().sort({ createdAt: -1 }); // derniers en premier
    res.status(200).json(lieux);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des lieux.", error });
  }
};

// 🔍 Récupérer un lieu par ID
exports.getLieuById = async (req, res) => {
  try {
    const lieu = await Lieu.findById(req.params.id);
    if (!lieu) return res.status(404).json({ message: "Lieu non trouvé." });
    res.status(200).json(lieu);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur.", error });
  }
};

// ✏️ Mettre à jour un lieu
exports.updateLieu = async (req, res) => {
  try {
    const updatedLieu = await Lieu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedLieu) return res.status(404).json({ message: "Lieu non trouvé." });
    res.status(200).json(updatedLieu);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour.", error });
  }
};

// ❌ Supprimer un lieu
exports.deleteLieu = async (req, res) => {
  try {
    const deleted = await Lieu.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Lieu non trouvé." });
    res.status(200).json({ message: "Lieu supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression.", error });
  }
};
