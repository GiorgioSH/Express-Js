const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

describe('TESTING', () => {
  it('checking for message', async done => {
    const response = await request.get('/users')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('hey')
    done()
  })
})
