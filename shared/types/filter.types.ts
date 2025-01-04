import type { Prisma } from "@prisma/client"

export interface AcademicFilterInput {
  academicWhereInput: Prisma.AcademicWhereInput
}

export interface AgeFilterInput {
  direct: Prisma.IntFilter
  throughProperChannel: Prisma.IntFilter
}

export interface ApplicationFilterInput {
  applicationWhereInput: Prisma.ApplicationWhereInput
}

export interface CourseFilterInput {
  academicFilterInput?: AcademicFilterInput
  courseWhereInput: Prisma.CourseWhereInput
}

export interface DivisionFilterInput {
  count: Prisma.IntFilter
  division: Prisma.IntFilter
  degreeLevelWhereInput?: Prisma.EnumDegreeLevelFilter
}

export interface ExperienceFilterInput {
  duration?: Prisma.IntFilter
  academicFilterInput?: AcademicFilterInput
  courseFilterInput?: CourseFilterInput
  experienceWhereInput: Prisma.ExperienceWhereInput
}

export interface PhaseFilterInput {
  phaseWhereInput: Prisma.EnumPhaseFilter
}

export interface ProfileFilterInput {
  profileWhereInput: Prisma.ProfileWhereInput
}

export interface PublicationFilterInput {
  publicationWhereInput: Prisma.PublicationWhereInput
}

export interface StatusFilterInput {
  statusWhereInput: Prisma.EnumStatusFilter
}

export interface VacancyFilterInput {
  vacancyWhereInput: Prisma.VacancyWhereInput
}

export interface FilterCollectionInput {
  AND?: FilterCollectionInput[]
  OR?: FilterCollectionInput[]
  NOT?: FilterCollectionInput[]
  title?: string
  description?: string
  academicFilterInput?: AcademicFilterInput
  ageFilterInput?: AgeFilterInput
  applicationFilterInput?: ApplicationFilterInput
  courseFilterInput?: CourseFilterInput
  divisionFilterInput?: DivisionFilterInput
  experienceFilterInput?: ExperienceFilterInput
  phaseFilterInput?: PhaseFilterInput
  profileFilterInput?: ProfileFilterInput
  publicationFilterInput?: PublicationFilterInput
  statusFilterInput?: StatusFilterInput
  vacancyFilterInput?: VacancyFilterInput
}

export interface FilterInput {
  vacancyIdFilter: Prisma.IntFilter
  phaseIdFilter?: Prisma.IntFilter
  statusIdFilter?: Prisma.IntFilter
  filterCollectionInput?: FilterCollectionInput
}
