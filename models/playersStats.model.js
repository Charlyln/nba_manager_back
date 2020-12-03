const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const PlayerStats = sequelizeInstance.define('PlayerStats', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  pts: Sequelize.INTEGER,
  reb: Sequelize.INTEGER,
  pas: Sequelize.INTEGER,
  blk: Sequelize.INTEGER,
  stl: Sequelize.INTEGER,
  teamIdAtTheGame: Sequelize.STRING
})

module.exports = PlayerStats
