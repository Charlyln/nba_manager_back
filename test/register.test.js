// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const Team = require('../models/team.model')
// const User = require('../models/user.model')
// let should = chai.should()
// const sequelize = require('../sequelize')
// let server = require('../server')
// chai.use(chaiHttp)

// let UserUuid
// let TeamUuid

// describe('REGISTER', () => {
//   before(async () => {
//     await sequelize.sync()

//     const user = await User.create({
//       pseudo: 'toto',
//       password: 'password'
//     })
//     UserUuid = user.dataValues.uuid
//   })

//   describe('DATACREATION', () => {
//     it('Should create teams and players', async () => {
//       try {
//         const res = await chai.request(server).post(`/dataCreation/${UserUuid}`)
//         res.should.have.status(201)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eql(1)
//         res.body[0].should.be.eql('all pass')
//       } catch (err) {
//         throw err
//       }
//     })
//   })

//   describe('TEAMCHOICE', () => {
//     before(async () => {
//       await sequelize.sync()

//       const teamData = await Team.findOne({
//         where: {
//           UserUuid
//         }
//       })

//       TeamUuid = teamData.dataValues.uuid
//     })

//     it('Should put my team choice', async () => {
//       try {
//         const res = await chai
//           .request(server)
//           .put(`/teams/${TeamUuid}`)
//           .send({ choice: true })
//         res.body.should.be.a('array')
//         res.should.have.status(201)
//         res.body[0].should.be.eql(1)
//       } catch (err) {
//         throw err
//       }
//     })

//     it('Should adjust players value', async () => {
//       try {
//         const res = await chai
//           .request(server)
//           .post(`/progress/adjustPlayerValue/${UserUuid}`)
//         res.should.have.status(200)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eql(61)
//       } catch (err) {
//         throw err
//       }
//     })
//   })
// })
