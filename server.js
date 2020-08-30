const express = require('express')
const sequelize = require('./sequelize')
const users = require('./routes/users.routes')
const teams = require('./routes/team.route')
const players = require('./routes/player.route')

var cors = require('cors')

const app = express()

// const dataCreation = require('./middlewares/dataCreation')

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/users', users)
app.use('/teams', teams)
app.use('/players', players)

require('./models/association')

app.get('/', (req, res) => {
  res.status(200).send('Welcome to nba manager !')
})

async function main() {
  try {
    await sequelize.sync({ force: true })
    await sequelize.authenticate()
    // await dataCreation()
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
