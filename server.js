const express = require('express')
const sequelize = require('./sequelize')
const users = require('./routes/users.routes')
const teams = require('./routes/team.route')
const players = require('./routes/player.route')
const dataCreation = require('./routes/dataCreation')
const games = require('./routes/game.route')
const visitors = require('./routes/visitor.route')
const playerStats = require('./routes/playerStats.route')
const seasons = require('./routes/season.route')
const gamePlayed = require('./routes/gamesPlayed.route')
const trophies = require('./routes/trophy.route')
const progress = require('./routes/progress.route')

var cors = require('cors')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/users', users)
app.use('/teams', teams)
app.use('/players', players)
app.use('/dataCreation', dataCreation)
app.use('/games', games)
app.use('/visitors', visitors)
app.use('/playerStats', playerStats)
app.use('/seasons', seasons)
app.use('/gamePlayed', gamePlayed)
app.use('/trophies', trophies)
app.use('/progress', progress)

require('./models/association')

app.get('/', (req, res) => {
  res.status(200).send('Welcome to nba manager !')
})

async function main() {
  try {
    await sequelize.sync()
    await sequelize.authenticate()
    console.log('Database succesfully joined')
    app.listen(PORT, (err) => {
      if (err) throw new Error(err.message)
      console.log(`Server is running on htpp://localhost:${PORT}`)
    })
  } catch (err) {
    console.log('Unable to join database', err.message)
  }
}

main()
