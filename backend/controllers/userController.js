const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

const registerUser = async (req, res) => {
  const { fullName, email, password, role } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Cet email est déjà utilisé." });
  }

  const user = await User.create({ fullName, email, password, role });
  res.status(201).json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Email ou mot de passe invalide." });
  }

  res.json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
};

module.exports = { registerUser, loginUser };
