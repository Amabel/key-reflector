import { defaultOptions } from './options'
import { isPlainObject } from './utils'

class KeyReflector {
  static reflectKeys(keys = [], inputOptions = {}) {
    let options = defaultOptions

    if (isPlainObject(inputOptions)) {
      options = { ...options, ...inputOptions }
    }

    const obj = {}
    const prefix = options.valuePrefix

    keys.forEach(key => {
      obj[key] = `${prefix}${key}`
    })

    return obj
  }
}

export default KeyReflector
