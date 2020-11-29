const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Trophy = sequelizeInstance.define('Trophy', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING,
  difficulty: Sequelize.INTEGER,
  earned: Sequelize.BOOLEAN
})

module.exports = Trophy
