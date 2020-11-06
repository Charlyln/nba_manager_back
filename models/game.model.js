const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Game = sequelizeInstance.define('Game', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  date: Sequelize.STRING,
  team1: Sequelize.INTEGER,
  team2: Sequelize.INTEGER
})

module.exports = Game
