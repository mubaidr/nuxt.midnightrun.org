import { generateVerificationRequest } from "server/utils/token"

export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)

  if (!user) {
    throw createError({
      statusCode: 401,
    })
  }

  if (user.emailVerified) {
    return {}
  }

  try {
    const { email } = user
    const { token } = await generateVerificationRequest(email)

    await sendEmailVerificationLink(email, token)

    return {}
  } catch {
    throw createError({
      message: "An unknown error occurred",
      statusCode: 500,
    })
  }
})
