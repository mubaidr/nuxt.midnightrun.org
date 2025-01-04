import { Prisma } from "@prisma/client"
import { disciplineArgs } from "./discipline"

export const disciplineSpecializationArgs =
  Prisma.validator<Prisma.DisciplineSpecializationDefaultArgs>()({
    include: {
      discipline: disciplineArgs,
      specialization: true,
    },
  })

export type DisciplineSpecializationResult =
  Prisma.DisciplineSpecializationGetPayload<typeof disciplineSpecializationArgs>
