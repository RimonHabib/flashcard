import { Router } from "express";
import { CardController } from "../controllers/card.controller";
import { validateRequest } from "../../utils/validation/schema-validator";
import {
  cardQueryParamsSchema,
  createCardInputSchema,
  updateCardInputSchema,
} from "../schema/card.schema";

export class CardRoute {
  public rootPath = "/card";
  constructor(private readonly cardController: CardController) {}
  routes() {
    return Router()
      .post(
        "/",
        validateRequest("body", createCardInputSchema),
        this.cardController.save,
      )
      .patch(
        "/:id",
        validateRequest("body", updateCardInputSchema),
        this.cardController.update,
      )
      .get(
        "/",
        validateRequest("query", cardQueryParamsSchema),
        this.cardController.getAll,
      );
  }
}
