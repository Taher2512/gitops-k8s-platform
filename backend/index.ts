import express from "express";
import cors from "cors";
import {
  collectDefaultMetrics,
  Counter,
  Histogram,
  Registry,
} from "prom-client";
import { httpMiddleware } from "./middleware";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const register = new Registry();
collectDefaultMetrics({ register });

export const httpRequestsTotal = new Counter({
  name: "http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["method", "route", "status_code"],
  registers: [register],
});

export const httpDuration = new Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration",
  labelNames: ["method", "route"],
  registers: [register],
});

app.use(httpMiddleware);

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

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Backend server is running on port ${PORT}`);
});
