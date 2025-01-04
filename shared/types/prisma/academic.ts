import { Prisma } from "@prisma/client"
import { degreeArgs } from "./degree"
import { disciplineSpecializationArgs } from "./disciplineSpecialization"

export const academicArgs = Prisma.validator<Prisma.AcademicDefaultArgs>()({
  include: {
    degree: degreeArgs,
    disciplineSpecialization: disciplineSpecializationArgs,
  },
})

export type AcademicResult = Prisma.AcademicGetPayload<typeof academicArgs>
