import { reflectKeys } from '../../src/'

describe('reflectKeys()', () => {
  context('with default options', () => {
    it('returns an object with the same key name and value', () => {
      const keys = ['KEY_1', 'KEY_2', 'KEY_3']
      const expected = {
        KEY_1: 'KEY_1',
        KEY_2: 'KEY_2',
        KEY_3: 'KEY_3',
      }
      expect(reflectKeys(keys)).toEqual(expected)
    })
  })
})
