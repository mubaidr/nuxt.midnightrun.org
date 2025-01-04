import type { UserSession } from "#auth-utils"
import type { PrismaClient } from "@prisma/client"
import type { H3Event, H3EventContext } from "h3"

export interface ExtendedH3EventContext extends H3EventContext {
  db: PrismaClient
  session: UserSession | null
}

export interface ExtendedH3Event extends H3Event {
  context: ExtendedH3EventContext
}

export const useContext = () => {
  if (import.meta.client) {
    throw createError({
      statusCode: 500,
    })
  }

  const event = useEvent() as unknown as ExtendedH3Event

  return event.context
}
