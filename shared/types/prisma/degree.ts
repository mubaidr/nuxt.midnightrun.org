import { Prisma } from "@prisma/client"

export const degreeArgs = Prisma.validator<Prisma.DegreeDefaultArgs>()({
  include: {},
})

export type DegreeResult = Prisma.DegreeGetPayload<typeof degreeArgs>
