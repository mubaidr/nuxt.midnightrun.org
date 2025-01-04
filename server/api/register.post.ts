import argon2 from "argon2"
import { z } from "zod"

export default defineEventHandler(async (event) => {
  const { db } = useContext()
  const body = await readValidatedBody(
    event,
    z.object({
      email: z.string(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    }).parse,
  )
  const { email, password, confirmPassword } = body

  if (password !== confirmPassword) {
    throw createError({
      statusCode: 400,
    })
  }

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  })

  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email address already in use",
    })
  }

  const hashedPassword = await argon2.hash(password)

  const user = await db.user.create({
    data: {
      email,
      emailVerified: false,
      password: hashedPassword,
    },
  })

  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email!,
      emailVerified: user.emailVerified,
    },
  })

  return {}
})
