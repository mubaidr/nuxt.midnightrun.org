import { Prisma } from "@prisma/client"

export const userArgs = Prisma.validator<Prisma.UserDefaultArgs>()({
  select: {
    id: true,
    email: true,
    emailVerified: true,
  },
})

export type UserResult = Prisma.UserGetPayload<typeof userArgs>
