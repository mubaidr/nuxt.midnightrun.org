import { Prisma } from "@prisma/client"
import { disciplineSpecializationArgs } from "./disciplineSpecialization"

export const vacancyArgs = Prisma.validator<Prisma.VacancyDefaultArgs>()({
  include: {
    advertisement: true,
    designation: true,
    payScale: true,
    disciplineSpecialization: disciplineSpecializationArgs,
  },
})

export type VacancyResult = Prisma.VacancyGetPayload<typeof vacancyArgs>

export const vacancyArgsWithApplicationSteps =
  Prisma.validator<Prisma.VacancyDefaultArgs>()({
    include: {
      advertisement: true,
      designation: true,
      payScale: true,
      disciplineSpecialization: disciplineSpecializationArgs,
      vacancyApplicationSteps: true,
    },
  })

export type VacancyResultWithApplicationSteps = Prisma.VacancyGetPayload<
  typeof vacancyArgsWithApplicationSteps
>
