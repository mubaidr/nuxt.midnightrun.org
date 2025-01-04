import { ProfileUncheckedCreateInputSchema } from "~~/.generated/zod"

export default defineEventHandler(async (event) => {
  const { db } = useContext()
  const { userId } = await useAuthedEvent()
  const data = await readValidatedBody(
    event,
    ProfileUncheckedCreateInputSchema.parse,
  )

  return db.profile.create({
    data: {
      ...data,
      userId,
      applicationId: null,
    },
  })
})
