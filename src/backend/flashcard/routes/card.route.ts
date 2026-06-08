import { Router } from "express";
import { CardController } from "../controllers/card.controller";

export class CardRoute {
  public rootPath = "/card";
  constructor(private readonly cardController: CardController) {}
  routes() {
    return Router().post("/", this.cardController.save);
  }
}
