import argon2 from "argon2"
import { z } from "zod"

export default defineEventHandler(async (event) => {
  const { db } = useContext()
  const body = await readValidatedBody(
    event,
    z.object({
      email: z.string().email(),
      password: z.string().min(8),
    }).parse,
  )
  const { email, password } = body

  const user = await db.user.findUnique({
    where: {
      email,
      password: {
        not: null,
      },
    },
  })

  if (!user || !user.email || !user.password) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
    })
  }

  const validPassword = await argon2.verify(user.password, password)

  if (!validPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid email or password",
    })
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
      emailVerified: user.emailVerified,
    },
  })

  return {}
})
