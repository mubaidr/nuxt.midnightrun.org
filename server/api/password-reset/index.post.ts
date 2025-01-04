import { z } from "zod"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)

  const { email } = await readValidatedBody(
    event,
    z.object({
      email: z.string().email("Must be a valid email"),
    }).parse,
  )

  console.log({ email })

  const storedUser = await findByUsername(email)

  if (!storedUser) {
    await sendAccountNotFoundEmail(email)

    throw createError({
      statusCode: 401,
      message: "User does not exist",
    })
  }

  const { token } = await generateVerificationRequest(email)
  await sendPasswordResetLink(email, token)

  return {}
})
