// import { H3Error } from 'h3'
// import { z } from 'zod'

// export default defineEventHandler(async (event) => {
//   const { user } = await useAuthedEvent()
//   const body = await readValidatedBody(
//     event,
//     z.object({
//       currentPassword: z.string(),
//       newPassword: z.string(),
//       newPasswordConfirm: z.string(),
//     }).parse,
//   )
//   const { currentPassword, newPassword, newPasswordConfirm } = body

//   try {
//     await validatePassword(currentPassword)
//     await validatePassword(newPassword)
//     await validatePassword(newPasswordConfirm)
//   } catch (err) {
//     throw createError({
//       statusCode: 400,
//     })
//   }

//   if (newPassword !== newPasswordConfirm) {
//     throw createError({
//       statusCode: 400,
//       message: 'Passwords does not match',
//     })
//   }

//   if (!import.meta.dev && newPasswordConfirm === currentPassword) {
//     throw createError({
//       statusCode: 400,
//       message: 'New password cannot be same as current password',
//     })
//   }

//   try {
//     const key = await auth.useKey('email', user.email, currentPassword)

//     if (!key) {
//       throw createError({
//         statusCode: 400,
//       })
//     }

//     await auth.updateKeyPassword('email', user.email, newPassword)

//     return {}
//   } catch (err: unknown) {
//     if (err instanceof H3Error) {
//       throw createError(err)
//     } else {
//       throw createError({
//         statusCode: 500,
//         message: 'Internal Server Error',
//       })
//     }
//   }
// })
