const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Role = sequelizeInstance.define('Role', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING
})

module.exports = Role
