import { Router, Request, Response } from "express";
import { healthController } from "./controller";

const router = Router();

export const healthRouter = router.get("/", healthController);
