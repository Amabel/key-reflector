import { isPlainObject } from '../../src/utils'

describe('isPlainObject', () => {
  it('returns true when value is object', () => {
    const value = {}
    expect(isPlainObject(value)).toBeTruthy()
  })

  it('returns true when value is array', () => {
    const value = []
    expect(isPlainObject(value)).toBeFalsy()
  })

  it('returns false when value is function', () => {
    const value = () => {}
    expect(isPlainObject(value)).toBeFalsy()
  })

  it('returns false when value is null', () => {
    const value = null
    expect(isPlainObject(value)).toBeFalsy()
  })

  it('returns false when value is undefined', () => {
    const value = undefined
    expect(isPlainObject(value)).toBeFalsy()
  })
})
