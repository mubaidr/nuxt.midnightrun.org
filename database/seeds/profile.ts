import {
  Gender,
  Religion,
  type Prisma,
  type PrismaClient,
} from "@prisma/client"
import { Chance } from "chance"
import { list } from "./city"

export default async function seeder(db: PrismaClient): Promise<void> {
  const chance = new Chance()
  const city =
    list[
      chance.integer({
        min: 0,
        max: list.length - 1,
      })
    ].title

  const users = await db.user.findMany({
    select: {
      id: true,
    },
    orderBy: {
      id: "asc",
    },
  })

  const countries = (
    await db.nationality.findMany({
      take: users.length,
    })
  ).sort((a, b) => a.id - b.id)

  for (let j = 0; j < users.length; j += 1) {
    const { id: userId } = users[j]

    const name = chance.name()
    const country = countries[j]

    const data: Prisma.ProfileCreateInput = {
      name,
      cnic: `1111111111${100 + j}`,
      birthDate: chance.date({
        max: new Date("01-01-1995"),
      }),
      domicileDistrict: {
        connectOrCreate: {
          where: { title: city },
          create: { title: city },
        },
      },
      district: {
        connectOrCreate: {
          where: { title: city },
          create: { title: city },
        },
      },
      city: {
        connectOrCreate: {
          where: { title: city },
          create: { title: city },
        },
      },
      address: chance.address(),
      fatherName: chance.name(),
      mobile: "0311 1111111",
      alternateContactNumber: "",
      nationality: {
        connectOrCreate: {
          where: { title: country.title },
          create: {
            code: country.code,
            title: country.title,
          },
        },
      },
      religion: Religion.Islam,
      gender: Gender.Female,
      user: {
        connect: {
          id: userId,
        },
      },
    }

    const record = await db.profile.findFirst({
      where: {
        applicationId: null,
        userId,
      },
    })

    if (record) {
      continue
    }

    await db.profile.create({
      data,
    })
  }
}
