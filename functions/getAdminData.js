const Game = require('../models/game.model')
const Season = require('../models/season.model')
const Team = require('../models/team.model')
const Trophy = require('../models/trophy.model')
const User = require('../models/user.model')

const getAdminData = async () => {
  const options1 = {
    chart: {
      type: 'donut'
    },
    theme: {
      mode: 'dark',
      palette: 'palette1'
    },
    legend: {
      position: 'bottom'
    },
    title: {
      text: 'Users have passed a season',
      align: 'center'
    },
    labels: ['No', 'Yes']
  }
  const options2 = {
    chart: {
      type: 'donut'
    },
    theme: {
      mode: 'dark',
      palette: 'palette1'
    },
    legend: {
      position: 'bottom'
    },
    title: {
      text: 'Number of Trophies earned by users',
      align: 'center'
    },
    labels: ['0', '1 - 2', '3+']
  }
  const options3 = {
    chart: {
      type: 'donut'
    },
    theme: {
      mode: 'dark',
      palette: 'palette1'
    },
    legend: {
      position: 'bottom'
    },
    title: {
      text: 'Number of games played',
      align: 'center'
    },
    labels: ['0 - 1', '2 - 10', '10 - 20', '20+']
  }
  const users = await User.findAll({
    include: [
      {
        model: Trophy
      },
      {
        model: Team
      },
      {
        model: Game
      },
      {
        model: Season
      }
    ]
  })

  const usersNoAdmin = users.filter((user) => user.Games.length > 0)

  const games = await Game.findAll()

  const gamesPlayed = games.filter((game) => game.team1)

  const usersDontPassSeason = usersNoAdmin.filter(
    (user) => user.Seasons.length === 1
  )
  const usersDidPassSeason = usersNoAdmin.filter(
    (user) => user.Seasons.length > 1
  )

  const usersPassSeason = [
    usersDontPassSeason.length,
    usersDidPassSeason.length
  ]

  const usersEarned0Trophies = usersNoAdmin.filter((user) =>
    user.Trophies.filter((trophy) => trophy.earned).length === 0 ? true : false
  )

  const usersEarned1or2Trophies = usersNoAdmin.filter((user) =>
    user.Trophies.filter((trophy) => trophy.earned).length > 0 &&
    user.Trophies.filter((trophy) => trophy.earned).length < 3
      ? true
      : false
  )

  const usersEarned3AndMoreTrophies = usersNoAdmin.filter((user) =>
    user.Trophies.filter((trophy) => trophy.earned).length >= 3 ? true : false
  )

  const usersEarnedTrophies = [
    usersEarned0Trophies.length,
    usersEarned1or2Trophies.length,
    usersEarned3AndMoreTrophies.length
  ]

  const usersPlayed0or1Game = usersNoAdmin.filter((user) =>
    user.Games.filter((game) => game.team1).length < 2 ? true : false
  )

  const usersPlayedLess10Game = usersNoAdmin.filter((user) =>
    user.Games.filter((game) => game.team1).length >= 2 &&
    user.Games.filter((game) => game.team1).length < 10
      ? true
      : false
  )

  const usersPlayedLess20Game = usersNoAdmin.filter((user) =>
    user.Games.filter((game) => game.team1).length >= 10 &&
    user.Games.filter((game) => game.team1).length < 31
      ? true
      : false
  )

  const usersPlayedMore20Game = usersNoAdmin.filter((user) =>
    user.Games.filter((game) => game.team1).length >= 31 ? true : false
  )

  const usersPlayedGames = [
    usersPlayed0or1Game.length,
    usersPlayedLess10Game.length,
    usersPlayedLess20Game.length,
    usersPlayedMore20Game.length
  ]

  const NbrUsers = usersNoAdmin.length
  const NbrGamesPlayed = gamesPlayed.length

  const usersData = usersNoAdmin.map((user) => {
    const usersSeason = user.Seasons.length
    const UsersGamesPlayed = user.Games.filter((game) => game.team1).length
    const UsersTeam = user.Teams.filter((team) => team.choice)
    const userTeamName = UsersTeam[0].name
    const userTrophies = user.Trophies.filter((trophy) => trophy.earned).length
    const rightDateFormat = new Date(user.createdAt)
    const date = rightDateFormat.toString().slice(4, 15)
    const userUuid = user.uuid
    return {
      pseudo: user.pseudo,
      creationDate: date,
      UsersGamesPlayed,
      usersSeason,
      userTrophies,
      userTeamName,
      userUuid
    }
  })

  const arrayOfChartData = [
    {
      options: options1,
      series: usersPassSeason
    },
    {
      options: options2,
      series: usersEarnedTrophies
    },
    {
      options: options3,
      series: usersPlayedGames
    }
  ]

  const adminData = {
    usersData,
    arrayOfChartData,
    NbrUsers,
    NbrGamesPlayed,
    users
  }

  return adminData
}

module.exports = getAdminData
