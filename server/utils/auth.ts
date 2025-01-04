import db from "database"
import { userArgs } from "~~/shared/types/prisma"

export async function validateUsername(username: string) {
  const isEmail = /.+@.+\..+/.test(username)
  const isContactNumber =
    /^\d+$/.test(username) && (username.length === 10 || username.length === 11)
  const isCNIC =
    /^\d{5}-?\d{7}-?\d{1}$/.test(username) &&
    username.replaceAll("-", "").replaceAll(" ", "").length === 13

  if (username.length < 3 || username.length > 31) {
    return false
  }

  if (isEmail) {
    return true
  }

  if (isContactNumber) {
    return true
  }

  if (isCNIC) {
    return true
  }

  return false
}

export async function findByUsername(email: string) {
  return db.user.findFirst({
    ...userArgs,
    where: {
      email,
    },
  })
}
