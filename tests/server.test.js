const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../functions', () => ({
  processRequest: (id) => Promise.resolve(
    {id: id, name: 'test user', email: 'test@user.nz'}
  ),
  
}))

const server = require('../server')

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)    
})

// test('post /api', () => {
//   return request(server)
//     .post('/api')
//     .send({name: 'ball'})
//     .expect(200)    
// })
