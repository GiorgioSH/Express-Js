const request = require('supertest')
const app = require('../app')

describe('Check for 42', () => {
  test('check message if number is 42', done => {
    request(app)
      .get('/42')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        // console.log(response.res)
        expect(response).toBeDefined()
        expect(response.body.result).toBe('Your number is 42, please enter another number')
        done()
      })
  })
})
