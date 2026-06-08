import { Router } from "express";
import { CardController } from "../controllers/card.controller";
import { validateRequest } from "../../utils/validation/schema-validator";
import { createCardInputSchema } from "../schema/card.schema";

export class CardRoute {
  public rootPath = "/card";
  constructor(private readonly cardController: CardController) {}
  routes() {
    return Router().post(
      "/",
      validateRequest(createCardInputSchema),
      this.cardController.save,
    );
  }
}
