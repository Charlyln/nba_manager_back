const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Day = sequelizeInstance.define('Day', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  date: Sequelize.STRING
})

module.exports = Day
