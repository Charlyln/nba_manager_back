const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Season = sequelizeInstance.define('Season', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  startYear: {
    type: Sequelize.INTEGER,
    defaultValue: 2020
  },
  endYear: {
    type: Sequelize.INTEGER,
    defaultValue: 2021
  }
})

module.exports = Season
