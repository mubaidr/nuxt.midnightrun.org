import { Prisma } from "@prisma/client"
import { vacancyArgs } from "./vacancy"

export const applicationArgs =
  Prisma.validator<Prisma.ApplicationDefaultArgs>()({
    include: {
      vacancyCity: {
        include: {
          city: true,
        },
      },
      vacancy: vacancyArgs,
    },
  })

export type ApplicationResult = Prisma.ApplicationGetPayload<
  typeof applicationArgs
>
