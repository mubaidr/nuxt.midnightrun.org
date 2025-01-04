import { Prisma } from "@prisma/client"

export const publicationArgs =
  Prisma.validator<Prisma.PublicationDefaultArgs>()({
    include: {},
  })

export type PublicationResult = Prisma.PublicationGetPayload<
  typeof publicationArgs
>
