import zod from "zod";

export const createCardInputSchema = zod
  .object({
    question: zod.string(),
    answer: zod.string(),
    topic: zod.string().optional(),
  })
  .required();

export type CreateCardInput = zod.infer<typeof createCardInputSchema>;

export const createCardOutputSchema = zod.object({
  ...createCardInputSchema.shape,
  id: zod.string(),
  rank: zod.number(),
});

export type CreateCardOutput = zod.infer<typeof createCardOutputSchema>;

export const updateCardInputSchema = zod
  .object({
    question: zod.string().optional(),
    answer: zod.string().optional(),
    topic: zod.string().optional(),
    rank: zod.number().optional(),
  })
  .optional();

export type UpdateCardInput = zod.infer<typeof updateCardInputSchema>;

export const updateRankInputSchema = zod
  .object({
    rank: zod.number(),
  })
  .required();

export type UpdateRankInput = zod.infer<typeof updateRankInputSchema>;

export const cardQueryParamsSchema = zod.object({
  perPage: zod
    .string()
    .transform((x) => {
      const y = parseInt(x);
      return Number.isNaN(y) ? undefined : y;
    })
    .optional(),
  offset: zod
    .string()
    .transform((x) => {
      const y = parseInt(x);
      return Number.isNaN(y) ? undefined : y;
    })
    .optional(),
});

export type CardQueryParams = zod.infer<typeof cardQueryParamsSchema>;

export const CardListResponseSchema = zod.object({
  data: zod.array(
    zod.object({
      id: zod.string(),
      question: zod.string(),
      answer: zod.string(),
      rank: zod.number(),
    }),
  ),
  totalCount: zod.number(),
  offset: zod.number(),
});

export type CardListResponse = zod.infer<typeof CardListResponseSchema>;
