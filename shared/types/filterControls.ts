export enum OPERATOR_NAMES {
  equals = "Equals",
  lt = "Less Than",
  lte = "Less Than or Equals",
  gt = "Greater Than",
  gte = "Greater Than or Equals",
  notIn = "Not In List",
  in = "In List",
  not = "Not",
  contains = "Contains",
  startsWith = "Starts With",
  endsWith = "Ends With",
  null = "Is Null",
  mode = "Mode",
  none = "none",
}

// avaialbel filter types
export enum FILTER_NAMES {
  object = "object",
  string = "string-filter-input",
  int = "int-filter-input",
  float = "float-filter-input",
  dateTime = "date-time-filter-input",
  bool = "bool-filter-input",
  none = "none",
}

// used for operator keys & title
export type FilterOperators<T> = {
  [P in keyof Required<T>]: OPERATOR_NAMES
} & {
  null?: OPERATOR_NAMES.null
}

// used for filter properties
export type FilterProperties<T> = { [P in keyof Required<T>]: FILTER_NAMES }
