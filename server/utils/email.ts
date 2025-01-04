import { createTransport } from "nodemailer"

// TODO: use html templates for email with fallback for text

const { smtpHost, smtpPort, smtpDefaultsFrom, smtpUser, smtpPass } =
  useRuntimeConfig()

export const transport = createTransport({
  pool: true,
  host: smtpHost,
  port: smtpPort,
  from: smtpDefaultsFrom,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  tls: {
    rejectUnauthorized: !import.meta.dev,
  },
})

// transport.verify((error) => {
//   if (error) {
//     console.error(error)
//   }
// })

export const sendEmailVerificationLink = async (
  email: string,
  token: string,
) => {
  const url = `http://localhost:3000/email-verification/${token}`

  return transport.sendMail({
    to: email,
    subject: `email-verification`,
    text: `email-verification link: ${url}`,
  })
}

export const sendPasswordResetLink = async (email: string, token: string) => {
  const url = `http://localhost:3000/password-reset/${token}`

  return transport.sendMail({
    to: email,
    subject: `Password Reset`,
    text: `Email verification link: ${url}`,
  })
}

export async function sendAccountNotFoundEmail(email: string) {
  return transport.sendMail({
    to: email,
    subject: `Account does not exists`,
    text: `Account does not exists`,
  })
}

export async function sendPasswordChangeEmail(email: string) {
  return transport.sendMail({
    to: email,
    subject: `Password changed`,
    text: `Password has been changed successfully`,
  })
}

// export async function sendMagicloginEmail(email: string, url: string) {
//   return transport.sendMail({
//     to: email,
//     subject: `Failed user attempt`,
//     text: `login using link: ${url}`,
//   })
// }
