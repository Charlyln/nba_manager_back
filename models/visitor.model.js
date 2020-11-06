const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Visitor = sequelizeInstance.define('Visitor', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING,
  logo: Sequelize.STRING
})

module.exports = Visitor
