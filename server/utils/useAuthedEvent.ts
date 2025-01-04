import type { ExtendedH3Event } from "./useContext"

export const useAuthedEvent = async () => {
  const event = useEvent() as unknown as ExtendedH3Event
  const session = event.context.session

  if (!session || !session.user) {
    throw createError({
      statusCode: 401,
      fatal: true,
    })
  }

  return {
    event,
    session,
    user: session.user,
    userId: session.user.id,
  }
}
