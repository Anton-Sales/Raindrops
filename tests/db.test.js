const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getColors gets colors', () => {
  // One for each letter of the alphabet!
  const expected = 8
  return db.getColors(testDb)
    .then(users => {
      const actual = users.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getTypeVisual gets the raindrops', () => {
  const expected = 4
  return db.getTypeVisual('raindrop', testDb)
    .then(users => {
      const actual = users.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
// test('getUser gets a single user', () => {
//   const expected = 'Ambitious Aardvark'
//   return db.getUser(99901, testDb)
//     .then(user => {
//       const actual = user.name
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeNull())
// })
