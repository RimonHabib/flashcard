import express = require("express");
import cors = require("cors");

// For TypeORM
import "reflect-metadata";

import { env } from "./config/environments";
import db from "./config/database";

import { healthRouter } from "./health/routes";
import { CardModule } from "./flashcard/module";

const app = express();
app.use(cors());
app.use(express.json());

const port = env.port;

// Routers
app.use("/health", healthRouter);

// Card Module
const cardModule = CardModule.getInstance();
app.use(cardModule.getRootPath(), cardModule.getRoutes());

try {
  db.initialize();
  console.log("Database initialized");
} catch (error) {
  console.log("Could not initialize database");
}

app.listen(port, () => {
  console.log(`the backend is running on http://127.0.0.1:${port}`);
});
