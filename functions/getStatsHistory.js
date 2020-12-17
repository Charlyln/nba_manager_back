const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Game = require('../models/game.model')
const Season = require('../models/season.model')
const PlayerStats = require('../models/playersStats.model')
const Visitor = require('../models/visitor.model')

const getStatsHistory = async (UserUuid, SeasonUuid) => {
  const seasons = await Season.findAll({
    where: {
      UserUuid
    },
    include: [
      {
        model: Game,
        include: [
          {
            model: PlayerStats,
            include: [
              {
                model: Player,
                include: [
                  {
                    model: Team
                  }
                ]
              }
            ]
          },
          {
            model: Team
          },
          {
            model: Visitor,
            include: [
              {
                model: Team
              }
            ]
          }
        ]
      }
    ]
  })

  const seasonFilter = seasons.filter((season) => season.uuid !== SeasonUuid)

  return seasonFilter
}

module.exports = getStatsHistory
