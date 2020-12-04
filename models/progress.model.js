const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Progress = sequelizeInstance.define('Progress', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  value: Sequelize.INTEGER,
  year: Sequelize.INTEGER
})

module.exports = Progress
