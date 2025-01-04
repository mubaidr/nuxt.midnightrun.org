import { z } from "zod"
import { ProfileUncheckedUpdateInputSchema } from "~~/.generated/zod"

export default defineEventHandler(async (event) => {
  const { db } = useContext()
  const { userId } = await useAuthedEvent()
  const { id } = await getValidatedRouterParams(
    event,
    z.object({
      id: z.coerce.number(),
    }).parse,
  )
  const data = await readValidatedBody(
    event,
    ProfileUncheckedUpdateInputSchema.parse,
  )

  return db.profile.update({
    where: {
      id,
      userId,
      applicationId: null,
    },
    data: {
      ...data,
      userId,
      applicationId: null,
    },
  })
})
