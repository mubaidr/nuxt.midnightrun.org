import { Prisma } from "@prisma/client"
// import { disciplineSpecializationArgs } from './SpecializationResultType';

export const subscribeArgs = Prisma.validator<Prisma.SubscribeDefaultArgs>()({
  include: {},
})

export type SubscribeResult = Prisma.SubscribeGetPayload<typeof subscribeArgs>
