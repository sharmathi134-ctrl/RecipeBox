import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import path from "node:path";
import recipeRoutes from"./routes/recipeRoutes.js";

dotenv.config({
    path: path.join(path.dirname(fileURLToPath(import.meta.url)), ".env")
});

const app = express();

app.use(cors());
app.use(express.json({limit:"10mb"}));
app.use("/api/recipes",recipeRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully! 🍃");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });

// Test Route
app.get("/", (req, res) => {
    res.send("RecipeBox Backend is Running! 🍲");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});