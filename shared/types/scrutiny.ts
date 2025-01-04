import type { FilterInput } from "./filter.types"
import type { ApplicationResult } from "./prisma"

export interface Scrutiny {
  filterInput: FilterInput
}

export interface ScrutinyResult {
  total: number
  shortlisted: number
  applications: ApplicationResult[]
}
