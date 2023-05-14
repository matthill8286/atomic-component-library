export interface KeyedObject<T> {
  [key: string]: T
}

/**
 * Simple switch-case helper.
 * Uses an object-map as input, returns the value specified by provided key or 'default'.
 *
 * @param key to select from cases
 * @param cases map of keyed-cases
 */
export const switchCase = <T>(key: string, cases: KeyedObject<T>): T | undefined => {
  return cases[key] || cases.default
}
