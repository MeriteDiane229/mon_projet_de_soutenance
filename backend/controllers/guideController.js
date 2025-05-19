const Guide = require("../models/Guide");

// ➕ Ajouter un guide
exports.createGuide = async (req, res) => {
  try {
    const { nom, langues, biographie, telephone, email, photo, experience, disponible } = req.body;
    const newGuide = new Guide({
      nom,
      langues,
      biographie,
      telephone,
      email,
      photo,
      experience,
      disponible,
    });
    const savedGuide = await newGuide.save();
    res.status(201).json(savedGuide);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du guide.", error });
  }
};

// 📋 Obtenir tous les guides
exports.getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.find().sort({ createdAt: -1 });
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des guides.", error });
  }
};

// 🔍 Obtenir un guide par ID
exports.getGuideById = async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.id);
    if (!guide) return res.status(404).json({ message: "Guide non trouvé." });
    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur.", error });
  }
};

// ✏️ Modifier un guide
exports.updateGuide = async (req, res) => {
  try {
    const updatedGuide = await Guide.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedGuide) return res.status(404).json({ message: "Guide non trouvé." });
    res.status(200).json(updatedGuide);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour.", error });
  }
};

// ❌ Supprimer un guide
exports.deleteGuide = async (req, res) => {
  try {
    const deleted = await Guide.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Guide non trouvé." });
    res.status(200).json({ message: "Guide supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression.", error });
  }
};
