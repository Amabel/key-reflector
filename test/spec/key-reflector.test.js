import { reflectKeys } from '../../src/'

describe('reflectKeys()', () => {
  context('with default options', () => {
    it('returns an object with the same key name and value', () => {
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'KEY_ONE',
        KEY_TWO: 'KEY_TWO',
        KEY_THREE: 'KEY_THREE',
      }
      expect(reflectKeys(keys)).toEqual(expected)
    })

    it('returns an empty object when keys are not provided', () => {
      const expected = {}
      expect(reflectKeys()).toEqual(expected)
    })
  })

  context('with options.valuePrefix provided', () => {
    it('adds prefix to each value', () => {
      const options = { valuePrefix: 'prefix' }
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'PREFIX_KEY_ONE',
        KEY_TWO: 'PREFIX_KEY_TWO',
        KEY_THREE: 'PREFIX_KEY_THREE',
      }
      expect(reflectKeys(keys, options)).toEqual(expected)
    })
  })

  context('with options.valueCase provided', () => {
    it('returns camelCase', () => {
      const options = { valueCase: 'camelCase' }
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'keyOne',
        KEY_TWO: 'keyTwo',
        KEY_THREE: 'keyThree',
      }
      expect(reflectKeys(keys, options)).toEqual(expected)
    })

    it('returns param case', () => {
      const options = { valueCase: 'paramCase' }
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'key-one',
        KEY_TWO: 'key-two',
        KEY_THREE: 'key-three',
      }
      expect(reflectKeys(keys, options)).toEqual(expected)
    })

    it('returns pascal case', () => {
      const options = { valueCase: 'pascalCase' }
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'KeyOne',
        KEY_TWO: 'KeyTwo',
        KEY_THREE: 'KeyThree',
      }
      expect(reflectKeys(keys, options)).toEqual(expected)
    })

    it('returns snake case', () => {
      const options = { valueCase: 'snakeCase' }
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'key_one',
        KEY_TWO: 'key_two',
        KEY_THREE: 'key_three',
      }
      expect(reflectKeys(keys, options)).toEqual(expected)
    })

    it('returns constant case by default', () => {
      const options = {}
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'KEY_ONE',
        KEY_TWO: 'KEY_TWO',
        KEY_THREE: 'KEY_THREE',
      }
      expect(reflectKeys(keys, options)).toEqual(expected)
    })

    it('returns constant case if valueCase is invalid', () => {
      const options = { valueCase: 'invalidValueCase' }
      const keys = ['KEY_ONE', 'KEY_TWO', 'KEY_THREE']
      const expected = {
        KEY_ONE: 'KEY_ONE',
        KEY_TWO: 'KEY_TWO',
        KEY_THREE: 'KEY_THREE',
      }
      expect(reflectKeys(keys, options)).toEqual(expected)
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
      expect(reflectKeys(keys, options)).toEqual(expected)
    })
  })
})
