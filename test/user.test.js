require('dotenv').config()
const chai = require('chai')
const chaiHttp = require('chai-http')
const Role = require('../models/role.model')
let should = chai.should()
const sequelize = require('../sequelize')
let server = require('../server')

chai.use(chaiHttp)

const userKeys = [
  'uuid',
  'pseudo',
  'password',
  'RoleUuid',
  'createdAt',
  'updatedAt'
]
let roleId

describe('USER', () => {
  before(async () => {
    await sequelize.sync({ force: true })
    const role = await Role.create({ name: 'USER' })
    roleId = role.dataValues.uuid
  })
  describe('POST', () => {
    it('Should post a user', async () => {
      try {
        const res = await chai
          .request(server)
          .post('/users')
          .send({ pseudo: 'pseudo', password: 'password', RoleUuid: roleId })

        res.body.should.be.a('object')
        res.should.have.status(201)
        res.body.should.have.keys(userKeys)
      } catch (err) {
        throw err
      }
    })
    it('Should failed to post a user: same pseudo', async () => {
      try {
        const res = await chai
          .request(server)
          .post('/users')
          .send({ pseudo: 'pseudo', password: 'password', RoleUuid: roleId })
        res.should.have.status(422)
        res.body.name.should.be.eql('SequelizeUniqueConstraintError')
      } catch (err) {
        throw err
      }
    })
    it('Should failed to post a user: no passord ', async () => {
      try {
        const res = await chai
          .request(server)
          .post('/users')
          .send({ pseudo: 'pseudo2', RoleUuid: roleId })
        res.should.have.status(422)
      } catch (err) {
        throw err
      }
    })
    it('Should failed to post a user: wrond roleUuid', async () => {
      try {
        const res = await chai.request(server).post('/users').send({
          pseudo: 'pseudo3',
          password: 'password',
          RoleUuid: 'Wrond RoleUuid'
        })
        res.should.have.status(422)
      } catch (err) {
        throw err
      }
    })
    it('Should failed to post a user: short password', async () => {
      try {
        const res = await chai
          .request(server)
          .post('/users')
          .send({ pseudo: 'pseudo4', password: 'pas', RoleUuid: roleId })
        res.should.have.status(422)
      } catch (err) {
        throw err
      }
    })
  })
})
