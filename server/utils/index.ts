export function exclude<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const newObj = { ...obj }

  // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  keys.forEach((key) => delete newObj[key])
  return newObj
}

export type ArrayElement<ArrayType> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never
