const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')
const Game = require('../models/game.model')
const Season = require('../models/season.model')

const GamesDataCreation2 = async (uuid) => {
  const visitors = await Visitor.findAll({
    where: {
      UserUuid: uuid
    }
  })

  const teams = await Team.findAll({
    where: {
      UserUuid: uuid
    }
  })
  const season = await Season.create({
    UserUuid: uuid
  })

  let results = Promise.all(
    teams.map(async (team, i) => {
      visitors
        .filter((visitor) => team.uuid !== visitor.TeamUuid)
        .map(async (visitor) => {
          try {
            const res = await Game.create({
              date: i,
              TeamUuid: team.uuid,
              VisitorUuid: visitor.uuid,
              UserUuid: uuid,
              SeasonUuid: season.dataValues.uuid
            })
          } catch (err) {
            console.log(err)
          }
        })
    })
  )

  return season

}

module.exports = GamesDataCreation2
