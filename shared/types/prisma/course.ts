import { Prisma } from "@prisma/client"
import { disciplineSpecializationArgs } from "./disciplineSpecialization"

export const courseArgs = Prisma.validator<Prisma.CourseDefaultArgs>()({
  include: {
    disciplineSpecialization: disciplineSpecializationArgs,
  },
})

export type CourseResult = Prisma.CourseGetPayload<typeof courseArgs>
