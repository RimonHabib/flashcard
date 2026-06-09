import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";
export function validateRequest(key: string, schema: ZodType) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req[key]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("Request validation failed");
        return res.status(400).json({
          msg: error.message,
          details: error.issues,
        });
      } else {
        next(error);
      }
    }
  };
}
