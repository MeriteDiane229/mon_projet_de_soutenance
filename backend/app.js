const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const { protect } = require("./middleware/authMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // pour lire JSON dans req.body

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API en cours d'exécution...");

  app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "Bienvenue sur la route protégée", user: req.user });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
