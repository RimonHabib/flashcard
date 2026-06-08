import zod from "zod";

export const createCardInputSchema = zod
  .object({
    question: zod.string(),
    answer: zod.string(),
    topic: zod.string().optional(),
  })
  .required();

export type createCardInput = zod.infer<typeof createCardInputSchema>;

export const createCardOutputSchema = zod.object({
  ...createCardInputSchema.shape,
  id: zod.string(),
  rank: zod.number(),
});

export type createCardOutput = zod.infer<typeof createCardOutputSchema>;

export const updateCardInputSchema = zod
  .object({
    ...createCardInputSchema.shape,
    rank: zod.number(),
  })
  .required();

export type updateCardInput = zod.infer<typeof updateCardInputSchema>;

export const updateRankInputSchema = zod
  .object({
    rank: zod.number(),
  })
  .required();

export type updateRankInput = zod.infer<typeof updateRankInputSchema>;
