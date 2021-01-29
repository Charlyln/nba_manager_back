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

  const arrayTeam1 = []

  Promise.all(
    game.Team.Players.filter((player) => !player.isBench).map(
      async (player, i) => {
        const playerScore = Math.floor(
          Math.random() * (player.ptsMax - player.ptsMin) + player.ptsMin
        )
        if (playerScore < 0) {
          arrayTeam1.push(0)
        } else {
          arrayTeam1.push(playerScore)
        }

        const playerReb = Math.floor(
          Math.random() * (player.rebMax - player.rebMin) + player.rebMin
        )
        const playerPas = Math.floor(
          Math.random() * (player.pasMax - player.pasMin) + player.pasMin
        )

        const playerBlk = Math.floor(
          Math.random() * (player.blkMax - player.blkMin) + player.blkMin
        )
        const playerStl = Math.floor(
          Math.random() * (player.stlMax - player.stlMin) + player.stlMin
        )

        try {
          const playerstats = await PlayerStats.create({
            PlayerUuid: player.uuid,
            GameUuid: uuid,
            pts: playerScore < 0 ? 0 : playerScore,
            reb: playerReb < 0 ? 0 : playerReb,
            pas: playerPas < 0 ? 0 : playerPas,
            blk: playerBlk < 0 ? 0 : playerBlk,
            stl: playerStl < 0 ? 0 : playerStl,
            UserUuid: game.UserUuid,
            teamIdAtTheGame: game.TeamUuid
          })
        } catch (err) {
          console.log(err)
        }
      }
    )
  )

  const arrayTeam2 = []

  Promise.all(
    game.Visitor.Team.Players.filter((player) => !player.isBench).map(
      async (player) => {
        const playerScore = Math.floor(
          Math.random() * (player.ptsMax - player.ptsMin) + player.ptsMin
        )
        if (playerScore < 0) {
          arrayTeam2.push(0)
        } else {
          arrayTeam2.push(playerScore)
        }

        const playerReb = Math.floor(
          Math.random() * (player.rebMax - player.rebMin) + player.rebMin
        )
        const playerPas = Math.floor(
          Math.random() * (player.pasMax - player.pasMin) + player.pasMin
        )
        const playerBlk = Math.floor(
          Math.random() * (player.blkMax - player.blkMin) + player.blkMin
        )
        const playerStl = Math.floor(
          Math.random() * (player.stlMax - player.stlMin) + player.stlMin
        )

        try {
          const playerstats = await PlayerStats.create({
            PlayerUuid: player.uuid,
            GameUuid: uuid,
            pts: playerScore < 0 ? 0 : playerScore,
            reb: playerReb < 0 ? 0 : playerReb,
            pas: playerPas < 0 ? 0 : playerPas,
            blk: playerBlk < 0 ? 0 : playerBlk,
            stl: playerStl < 0 ? 0 : playerStl,
            UserUuid: game.UserUuid,
            teamIdAtTheGame: game.Visitor.TeamUuid
          })
        } catch (err) {
          console.log(err)
        }
      }
    )
  )

  let totalTeam1 = arrayTeam1.reduce((a, b) => (a = a + b), 0)
  let totalTeam2 = arrayTeam2.reduce((a, b) => (a = a + b), 0)

  const gameId1 = game.uuid

  if (totalTeam1 > totalTeam2) {
    await Game.update(
      {
        team1: totalTeam1,
        team2: totalTeam2,
        teamWin: game.TeamUuid,
        teamLoose: game.Visitor.TeamUuid
      },
      { where: { uuid: gameId1 } }
    )
  } else if (totalTeam1 < totalTeam2) {
    await Game.update(
      {
        team1: totalTeam1,
        team2: totalTeam2,
        teamWin: game.Visitor.TeamUuid,
        teamLoose: game.TeamUuid
      },
      { where: { uuid: gameId1 } }
    )
  } else if (totalTeam1 === totalTeam2) {
    await Game.update(
      {
        team1: totalTeam1 + 1,
        team2: totalTeam2,
        teamWin: game.TeamUuid,
        teamLoose: game.Visitor.TeamUuid
      },
      { where: { uuid: gameId1 } }
    )
  }

  const gameReturn = await Game.findOne({
    where: {
      uuid
    },
    include: [
      {
        model: PlayerStats
      }
    ]
  })

  return gameReturn
}

module.exports = gamePlayed
