// import { profileArgs } from '~~/types'

export default defineEventHandler(async () => {
  const { db } = useContext()
  const { userId } = await useAuthedEvent()

  return db.profile.findFirst({
    // ...profileArgs,
    where: {
      userId,
      applicationId: null,
    },
  })
})
