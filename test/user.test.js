const chai = require('chai')
const chaiHttp = require('chai-http')
let should = chai.should()
const sequelize = require('../sequelize')
let server = require('../server')

chai.use(chaiHttp)

const userKeys = ['uuid', 'pseudo', 'createdAt', 'updatedAt']

describe('USER', () => {
  before(async () => {
    await sequelize.sync()
  })
  describe('POST', () => {
    it('Should post a user', async () => {
      try {
        const res = await chai
          .request(server)
          .post('/users')
          .send({ pseudo: 'toto' })
        res.body.should.be.a('object')
        res.should.have.status(201)
        res.body.should.have.keys(userKeys)
      } catch (err) {
        throw err
      }
    })
  })
})
