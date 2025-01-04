import { Prisma } from "@prisma/client"

export const advertisementArgs =
  Prisma.validator<Prisma.AdvertisementDefaultArgs>()({
    include: {
      advertisementAttachments: {
        include: {
          attachment: true,
        },
      },
    },
  })

export type AdvertisementResult = Prisma.AdvertisementGetPayload<
  typeof advertisementArgs
>
