import { z } from "zod"

export default defineEventHandler(async (event) => {
  const { db } = useContext()
  const { user } = await getUserSession(event)
  const routerParams = await getValidatedRouterParams(
    event,
    z.object({
      token: z.string(),
    }).parse,
  )

  const { token } = routerParams

  if (!user) {
    return sendRedirect(
      event,
      `/login?redirect=${encodeURIComponent("/email-verification/" + token)}`,
    )
  }

  if (user.emailVerified) {
    return sendRedirect(event, "/")
  }

  try {
    const { id, email } = user

    await validateEmailVerificationToken(email, token)

    await db.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: true,
      },
    })

    await replaceUserSession(event, {
      user: {
        id,
        email,
        emailVerified: true,
      },
    })

    return sendRedirect(event, "/email-verification/success")
  } catch {
    throw createError({
      statusCode: 400,
      message: "Invalid email verification link",
    })
  }
})
