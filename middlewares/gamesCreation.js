const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')
const Game = require('../models/game.model')

const GamesDataCreation = async (uuid) => {
  const teams = await Team.findAll({
    where: {
      UserUuid: uuid
    }
  })

  let results = Promise.all(
    teams.map(async (team) => {
      try {
        const res = await Visitor.create({
          name: team.name,
          logo: team.logo,
          TeamUuid: team.uuid,
          UserUuid: uuid
        })
      } catch (err) {
        console.log(err)
      }
    })
  )
}

module.exports = GamesDataCreation
