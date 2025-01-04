import { Prisma } from "@prisma/client"
import { disciplineSpecializationArgs } from "./disciplineSpecialization"

export const experienceArgs = Prisma.validator<Prisma.ExperienceDefaultArgs>()({
  include: {
    disciplineSpecialization: disciplineSpecializationArgs,
  },
})

export type ExperienceResult = Prisma.ExperienceGetPayload<
  typeof experienceArgs
>
