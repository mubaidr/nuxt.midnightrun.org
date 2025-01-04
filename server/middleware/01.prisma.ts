import type { PrismaClient } from "@prisma/client"
import db from "database"

export default eventHandler(async (event) => {
  event.context.db = db
})

declare module "h3" {
  interface H3EventContext {
    db: PrismaClient
  }
}
