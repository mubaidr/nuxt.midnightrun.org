import { newsArgs } from "~~/shared/types"

export default defineEventHandler(async () => {
  const { db } = useContext()

  return db.news.findMany({
    ...newsArgs,
  })
})
