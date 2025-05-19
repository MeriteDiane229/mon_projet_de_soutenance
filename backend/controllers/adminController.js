const User = require("../models/User");

exports.createGuide = async (req, res) => {
  const { nom, email, motdepasse } = req.body;

  const guideExists = await User.findOne({ email });
  if (guideExists) return res.status(400).json({ message: "Email déjà utilisé." });

  const guide = await User.create({ nom, email, motdepasse, role: "guide" });

  res.status(201).json({
    _id: guide._id,
    nom: guide.nom,
    email: guide.email,
    role: guide.role,
  });
};
