import { Prisma } from "@prisma/client"

export const bookArgs = Prisma.validator<Prisma.BookDefaultArgs>()({
  include: {},
})

export type BookResult = Prisma.BookGetPayload<typeof bookArgs>
