import { PrismaClient } from "@prisma/client"
import advertisement from "./advertisement"
import attachment from "./attachment"
import city from "./city"
import degree from "./degree"
import designation from "./designation"
import district from "./district"
import generalCriteria from "./generalCriteria"
import instruction from "./instruction"
import nationality from "./nationality"
import news from "./news"
import payScale from "./payScale"
import profile from "./profile"
import specialization from "./specialization"
import tenant from "./tenant"
import vacancy from "./vacancy"
import applicationSteps from "./applicationSteps"
import vacancyApplicationSteps from "./vacancyApplicationSteps"
import vacancyCity from "./vacancyCity"
import user from "./user"

async function setup(): Promise<void> {
  const db = new PrismaClient()

  // seed data
  await seed(db)

  await db.$disconnect()
}

async function seed(db: PrismaClient): Promise<void> {
  await tenant(db)
  await city(db)
  await district(db)
  await degree(db)
  await designation(db)
  await nationality(db)
  await payScale(db)
  await specialization(db)
  await applicationSteps(db)

  // sample data
  if (process.env.NODE_ENV === "development") {
    await user(db)

    // required for user application/ profile data
    await advertisement(db)
    await vacancy(db)
    await vacancyCity(db)
    await vacancyApplicationSteps(db)

    // user application/ profile data
    await profile(db)
    // await academic(db)
    // await course(db)
    // await publication(db)
    // await experience(db)
    // await relative(db)
    // await book(db)
    // await application(db)

    await generalCriteria(db)
    await attachment(db)
    await instruction(db)
    await news(db)
  }
}

setup()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    console.info("Setup succesfull!")
  })
