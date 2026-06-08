import { Request, Response } from "express";

export function healthController(request: Request, response: Response) {
  return response.json({
    health: "ok",
  });
}
