const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

// @route   POST /api/users/register
// @desc    Inscription d’un nouvel utilisateur
router.post("/register", registerUser);

// @route   POST /api/users/login
// @desc    Connexion d’un utilisateur existant
router.post("/login", loginUser);

module.exports = router;
