import type { Prisma, PrismaClient } from "@prisma/client"
import argon2 from "argon2"

export default async function seeder(db: PrismaClient): Promise<void> {
  for (let i = 0; i < 5; i += 1) {
    const email = `${i}test@test.com`
    const password = email
    const hashedPassword = await argon2.hash(password)

    const data: Prisma.UserCreateInput = {
      email,
      password: hashedPassword,
      emailVerified: true,
    }

    await db.user.upsert({
      where: { email },
      update: data,
      create: data,
    })
  }
}
