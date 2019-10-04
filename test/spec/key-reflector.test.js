import KeyReflector from '../../src/'

describe('reflectKeys()', () => {
  context('with default options', () => {
    it('returns an object with the same key name and value', () => {
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'KEY_ONE',
        KEY_TWO: 'KEY_TWO',
        KEY_THREE: 'KEY_THREE',
      }
      expect(KeyReflector.reflectKeys(keys)).toEqual(expected)
    })

    it('returns an empty object when keys are not provided', () => {
      const expected = {}
      expect(KeyReflector.reflectKeys()).toEqual(expected)
    })
  })

  context('with options.valuePrefix provided', () => {
    it('adds prefix to each value', () => {
      const options = { valuePrefix: 'PREFIX_' }
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'PREFIX_KEY_ONE',
        KEY_TWO: 'PREFIX_KEY_TWO',
        KEY_THREE: 'PREFIX_KEY_THREE',
      }
      expect(KeyReflector.reflectKeys(keys, options)).toEqual(expected)
    })
  })

  context('with invalid options', () => {
    it('returns constant case', () => {
      const options = 123
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'KEY_ONE',
        KEY_TWO: 'KEY_TWO',
        KEY_THREE: 'KEY_THREE',
      }
      expect(KeyReflector.reflectKeys(keys, options)).toEqual(expected)
    })
  })
})
