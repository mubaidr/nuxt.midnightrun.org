import type { Prisma, PrismaClient } from "@prisma/client"
import type { DefaultArgs } from "@prisma/client/runtime/library"

export * from "./academic"
export * from "./advertisement"
export * from "./application"
export * from "./book"
export * from "./course"
export * from "./degree"
export * from "./discipline"
export * from "./disciplineSpecialization"
export * from "./experience"
export * from "./instruction"
export * from "./drivingLicence"
export * from "./news"
export * from "./profile"
export * from "./publication"
export * from "./relative"
export * from "./subscribe"
export * from "./user"
export * from "./vacancy"

export type PrismaTransactionClient = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>
