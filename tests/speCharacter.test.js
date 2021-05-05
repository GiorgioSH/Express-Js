const request = require('supertest')
const app = require('../app')

describe('Check for special character', () => {
  test('check message if number is special character', done => {
    request(app)
      .get('/&')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        // console.log(response.res)
        expect(response).toBeDefined()
        expect(response.body.result).toBe('please do not enter special characters')
        done()
      })
  })
})
