import { Request, Response } from "express";
import { CardService } from "../services/card.service";
import { cardQueryParamsSchema } from "../schema/card.schema";

export class CardController {
  constructor(private readonly cardService: CardService) {}

  save = async (req: Request, res: Response) => {
    try {
      const card = await this.cardService.save(req.body);
      return res.status(201).json(card);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "something went wrong" });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const card = await this.cardService.update(
        req.params.id as string,
        req.body,
      );
      if (!card) return res.status(404).json({ msg: "card is not found" });
      return res.status(200).json(card);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "something went wrong" });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const queryParams = await cardQueryParamsSchema.parseAsync(req.query);
      const response = await this.cardService.getAll(queryParams);
      return res.status(200).json(response);
    } catch (error) {
      console.log("Something went wrong", error);
      return res.status(500).json({
        msg: "something went wrong",
      });
    }
  };
}
