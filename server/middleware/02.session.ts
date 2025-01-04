import type { UserSession } from "#auth-utils"

export default eventHandler(async (event) => {
  const session = await getUserSession(event)

  event.context.session = session
})

declare module "h3" {
  interface H3EventContext {
    session: UserSession | null
  }
}
