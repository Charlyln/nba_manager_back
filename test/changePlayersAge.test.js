// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const changePlayersAge = require('../functions/changePlayersAge')
// const DataCreation = require('../functions/dataCreation')
// const Team = require('../models/team.model')
// const User = require('../models/user.model')
// let should = chai.should()
// var expect = chai.expect
// const sequelize = require('../sequelize')
// let server = require('../server')
// chai.use(chaiHttp)

// let UserUuid
// let resBefore

// describe('PLAYERS', () => {
//   before(async () => {
//     await sequelize.sync()

//     const user = await User.create({
//       pseudo: 'toto'
//     })
//     UserUuid = user.dataValues.uuid
//   })

//   describe('CHANGE PLAYERS AGE', () => {
//     before(async () => {
//       await sequelize.sync()

//       resBefore = await DataCreation(UserUuid)
//     })

//     it('Should change players age', async () => {
//       try {
//         const res = await chai
//           .request(server)
//           .post(`/players/changeAge/${UserUuid}`)
//         res.should.have.status(201)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eql(61)
//         expect(res.body.length).to.not.equal(0)
//       } catch (err) {
//         throw err
//       }
//     })
//   })
// })
