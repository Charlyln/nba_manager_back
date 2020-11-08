const Team = require('../models/team.model')
const Player = require('../models/player.model')
const Visitor = require('../models/visitor.model')
const Game = require('../models/game.model')
const Season = require('../models/season.model')
const PlayerStats = require('../models/playersStats.model')

const gamePlayed = async (uuid) => {
  const game = await Game.findOne({
    where: {
      uuid
    },
    include: [
      {
        model: Team,
        include: [
          {
            model: Player
          }
        ]
      },
      {
        model: Visitor,
        include: [
          {
            model: Team,
            include: [
              {
                model: Player
              }
            ]
          }
        ]
      }
    ]
  })

  let team1Score = 0

  const res1 = Promise.all(
    game.Team.Players.map(async (player) => {
      const playerScore = Math.floor(
        Math.random() * (player.ptsMax - player.ptsMin) + player.ptsMin
      )

      try {
        const playerstats = await PlayerStats.create({
          PlayerUuid: player.uuid,
          GameUuid: uuid,
          pts: playerScore,
          UserUuid: game.UserUuid,
          teamIdAtTheGame: game.TeamUuid
        })

        team1Score = team1Score + playerScore
        return playerstats
      } catch (err) {
        console.log(err)
      } finally {
        const gameId = game.uuid
        const games = await Game.update(
          {
            team1: team1Score
          },
          { where: { uuid: gameId } }
        )
      }
    })
  )

  let team2Score = 0

  Promise.all(
    game.Visitor.Team.Players.map(async (player) => {
      const playerScore = Math.floor(
        Math.random() * (player.ptsMax - player.ptsMin) + player.ptsMin
      )

      try {
        const playerstats = await PlayerStats.create({
          PlayerUuid: player.uuid,
          GameUuid: uuid,
          pts: playerScore,
          UserUuid: game.UserUuid,
          teamIdAtTheGame: game.Visitor.TeamUuid
        })

        team2Score = team2Score + playerScore
      } catch (err) {
        console.log(err)
      } finally {
        const gameId = game.uuid
        const games = await Game.update(
          {
            team2: team2Score
          },
          { where: { uuid: gameId } }
        )
      }
    })
  )

  return res1
}

module.exports = gamePlayed

// const gamePlayed2 = async (uuid, SeasonUuid) => {
//   const games = await Game.findAll({
//     where: {
//       UserUuid: uuid,
//       SeasonUuid
//     }
//   })

//   let results = Promise.all(
//     teams.map(async (team, i) => {
//       visitors
//         .filter((visitor) => team.uuid !== visitor.TeamUuid)
//         .map(async (visitor) => {
//           try {
//             const res = await Game.create({
//               date: i,
//               TeamUuid: team.uuid,
//               VisitorUuid: visitor.uuid,
//               UserUuid: uuid,
//               SeasonUuid: season.dataValues.uuid
//             })
//           } catch (err) {
//             console.log(err)
//           }
//         })
//     })
//   )
// }

// module.exports = gamePlayed2
