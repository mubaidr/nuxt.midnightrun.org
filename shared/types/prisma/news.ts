import { Prisma } from "@prisma/client"

export const newsArgs = Prisma.validator<Prisma.NewsDefaultArgs>()({
  include: {
    newsAttachments: {
      include: {
        attachment: true,
      },
    },
  },
})

export type NewsResult = Prisma.NewsGetPayload<typeof newsArgs>
