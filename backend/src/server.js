import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

// mongodb connection
import connectDB from "./database/db.js";
connectDB();

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3001;

//move to prod
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/*splat", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});