import { Prisma } from "@prisma/client"

export const disciplineArgs = Prisma.validator<Prisma.DisciplineDefaultArgs>()({
  include: {
    studyArea: true,
  },
})

export type DisciplineResult = Prisma.DisciplineGetPayload<
  typeof disciplineArgs
>
