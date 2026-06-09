import { NextFunction, Request, Response } from "express";
import { Card } from "../entities/card.entity";
import { CardService } from "../services/card.service";
import { cardQueryParamsSchema } from "../schema/card.schema";

export class CardController {
  constructor(private readonly cardService: CardService) {}

  async save(req: Request, res: Response) {
    try {
      const { question, answer, topic } = req.body;
      const card = new Card();
      card.id = crypto.randomUUID();
      card.question = question;
      card.answer = answer;
      card.topic = topic;

      await card.save();

      res.status(201).json(card);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "something went wrong",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      let card = await Card.findBy({ id });
      if (!card) {
        return res.status(404).json({
          msg: "card is not found",
        });
      }

      await Card.update(id, req.body);
      card = await Card.findBy({ id });

      return res.status(200).json(card);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "something went wrong",
      });
    }
  }

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
