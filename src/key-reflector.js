import changeCase from 'change-case'
import { defaultOptions } from './options'
import { isPlainObject } from './utils'

export const reflectKeys = (keys = [], inputOptions = {}) => {
  let options = defaultOptions

  if (isPlainObject(inputOptions)) {
    options = { ...options, ...inputOptions }
  }

  const obj = {}
  const prefix = options.valuePrefix

  keys.forEach(key => {
    let value = `${prefix}-${key}`
    switch (options.valueCase) {
      case 'camelCase':
        value = changeCase.camelCase(value)
        break
      case 'paramCase':
        value = changeCase.paramCase(value)
        break
      case 'pascalCase':
        value = changeCase.pascalCase(value)
        break
      case 'snakeCase':
        value = changeCase.snakeCase(value)
        break
      default:
        value = changeCase.constantCase(value)
        break
    }
    obj[key] = value
  })

  return obj
}
