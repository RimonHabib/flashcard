import { Card } from "../entities/card.entity";
import {
  CardListResponse,
  CardListResponseSchema,
  CardQueryParams,
  CreateCardInput,
  CreateCardOutput,
  UpdateCardInput,
} from "../schema/card.schema";

export class CardService {
  async save(input: CreateCardInput): Promise<CreateCardOutput> {
    const card = new Card();
    card.id = crypto.randomUUID();
    card.question = input.question;
    card.answer = input.answer;
    card.topic = input.topic ?? "";
    await card.save();
    return card;
  }

  async update(id: string, input: UpdateCardInput): Promise<Card | null> {
    const card = await Card.findOneBy({ id });
    if (!card) return null;
    await Card.update(id, input ?? {});
    return Card.findOneBy({ id });
  }

  async getAll(queryParams: CardQueryParams): Promise<CardListResponse> {
    const params = {
      offset: 0,
      perPage: 10,
      ...queryParams,
    };

    const [cards, totalCount] = await Card.findAndCount({
      order: {
        rank: "ASC",
      },
      skip: params.offset,
      take: params.perPage,
    });

    return await CardListResponseSchema.parseAsync({
      data: cards,
      offset: params.offset,
      totalCount: totalCount,
    });
  }
}
