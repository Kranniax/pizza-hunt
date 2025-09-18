import express from "express";
import { connect, set } from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js"

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;

// Apply middleware for parsing different content types
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.use(routes);

connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/pizza-hunt"
);

// Use this to log mongo queries being executed!
set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
