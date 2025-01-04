import { Prisma } from "@prisma/client"

export const relativeArgs = Prisma.validator<Prisma.RelativeDefaultArgs>()({
  include: {},
})

export type RelativeResult = Prisma.RelativeGetPayload<typeof relativeArgs>
