import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from the backend!",
    items: ["DevOps", "Kubernetes", "GitOps"],
  });
});

app.get("/api/fail", (req, res) => {
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
