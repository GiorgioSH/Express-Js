const request = require('supertest')
const app = require('../app')

describe('Check for character', () => {
  test('check message if number is character', done => {
    request(app)
      .get('/AZERTY')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        // console.log(response.res)
        expect(response).toBeDefined()
        expect(response.body.result).toBe('please enter only numbers and not letters')
        done()
      })
  })
})
