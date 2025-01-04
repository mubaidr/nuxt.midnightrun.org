import { v4 } from "uuid"
import db from "database"

const EXPIRES_IN = 2 // 2 hours

export const generateVerificationRequest = async (identifier: string) => {
  const storedVerificationRequest = await db.verificationRequest.findFirst({
    where: {
      identifier,
      expires: {
        gt: new Date(),
      },
    },
  })

  if (storedVerificationRequest) {
    return storedVerificationRequest
  }

  const token = v4()
  const date = new Date()
  const expires = new Date(date.getTime() + EXPIRES_IN * 60 * 60 * 1000)

  return db.verificationRequest.create({
    data: {
      identifier,
      token,
      expires,
    },
  })
}

export const validateEmailVerificationToken = async (
  identifier: string,
  token: string,
) => {
  const storedToken = await db.verificationRequest.findFirst({
    where: {
      identifier,
      token,
      expires: {
        gt: new Date(),
      },
    },
  })

  if (!storedToken) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid verification token",
    })
  }

  return storedToken
}
