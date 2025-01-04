import { Prisma } from "@prisma/client"

export const licenceArgs = Prisma.validator<Prisma.DrivingLicenceDefaultArgs>()(
  {
    include: {},
  },
)

export type LicenceResult = Prisma.DrivingLicenceGetPayload<typeof licenceArgs>
