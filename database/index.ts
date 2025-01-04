import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  errorFormat: import.meta.env.DEV ? "pretty" : "minimal",
  log: [
    // {
    //   emit: 'stdout',
    //   level: 'query',
    // },
    // {
    //   emit: 'stdout',
    //   level: 'info',
    // },
    {
      emit: "stdout",
      level: "error",
    },
    {
      emit: "stdout",
      level: "warn",
    },
  ],
})

export default prisma
