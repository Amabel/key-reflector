export const reflectKeys = (keys = [], prefix = '') => {
  const obj = {}

  keys.forEach(key => {
    const value = `${prefix}${key}`
    obj[key] = value
  })
  return obj
}
