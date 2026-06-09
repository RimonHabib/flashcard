import { Card } from "../entities/card.entity";
import {
  CardListResponse,
  CardListResponseSchema,
  CardQueryParams,
} from "../schema/card.schema";

export class CardService {
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
