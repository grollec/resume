import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const appName = process.env.APP_NAME;

// Serve static files from the dist directory under /resume path
const distPath = process.env.DIST_PATH || path.join(__dirname, "../front/dist");
app.use("/resume", express.static(distPath));

// Handle all other routes by serving the React app's index.html
app.get("/*splat", (req, res) => {
    console.log(`[${appName}] erving index.html`);
    res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
    console.log(`[${appName}] listening on port ${port}`);
});
