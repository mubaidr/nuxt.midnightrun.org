import { Prisma } from "@prisma/client"

export const instructionArgs =
  Prisma.validator<Prisma.InstructionDefaultArgs>()({
    include: {
      instructionsAttachments: {
        include: {
          attachment: true,
        },
      },
    },
  })

export type InstructionResult = Prisma.InstructionGetPayload<
  typeof instructionArgs
>
