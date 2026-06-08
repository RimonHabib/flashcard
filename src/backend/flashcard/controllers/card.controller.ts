import { NextFunction, Request, Response } from "express";
import { Card } from "../entities/card.entity";

export class CardController {
  save(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req);
      const { question, answer, topic } = req.body;
      const card = new Card();
      card.id = crypto.randomUUID();
      card.question = question;
      card.answer = answer;
      card.topic = topic;

      card.save();

      res.status(201).json(card);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "something went wrong",
      });
    }
  }
}
