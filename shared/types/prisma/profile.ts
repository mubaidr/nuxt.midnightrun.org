import { Prisma } from "@prisma/client"

export const profileArgs = Prisma.validator<Prisma.ProfileDefaultArgs>()({
  include: {
    city: true,
    district: true,
    domicileDistrict: true,
    nationality: true,
    // user: true,
  },
})

export type ProfileResult = Prisma.ProfileGetPayload<typeof profileArgs>
