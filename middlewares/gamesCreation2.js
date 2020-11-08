const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')
const Game = require('../models/game.model')
const Season = require('../models/season.model')
const Day = require('../models/day.model')

const GamesDataCreation2 = async (uuid, TeamUuid) => {
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
  // let dayNumber =
  //   (teams.length * teams.length - teams.length) / (teams.length / 2)

  // for (let i = 0; i < dayNumber; i++) {
  //   await Day.create({
  //     date: 'coucou',
  //     SeasonUuid: season.dataValues.uuid,
  //     UserUuid: uuid
  //   })
  // }
  // const days = await Day.findAll({
  //   where: {
  //     UserUuid: uuid
  //   }
  // })
  // const games = await Game.findAll({
  //   where: {
  //     UserUuid: uuid
  //   }
  // })

  // const daysok = days.map(async (day) => {
  //   try {
  //     const res = await Game.update({
  //       DayUuid: season.dataValues.uuid
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // })
}

module.exports = GamesDataCreation2
