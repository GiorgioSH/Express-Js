const request = require('supertest')
const app = require('../app')

describe('Check Multiplication', () => {
  test("Multiply a number by 2 if it's not 42", done => {
    request(app)
    // We can enter a number down below and verify what is
    // the returned value in console.log()

      .get('/2')

      .then((response) => {
        expect(response.statusCode).toBe(200)
        // expect(finalresult).toBe(parseInt(req.params.id)*2);
        // console.log(response.res)
        expect(response).toBeDefined()
        // expect(res.text).toEqual("4");
        // expect(response.body[0]).toEqual(4)
        expect(response.body.result).toEqual(4)

        done()
      })
  })
})
