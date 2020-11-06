const Sequelize = require('sequelize')

const sequelizeInstance = require('../sequelize')

const Player = sequelizeInstance.define('Player', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  photo: Sequelize.STRING,
  value: Sequelize.INTEGER,
  ptsBeg: Sequelize.INTEGER,
  ptsMin: Sequelize.INTEGER,
  ptsMax: Sequelize.INTEGER,
  rebBeg: Sequelize.INTEGER,
  rebMin: Sequelize.INTEGER,
  rebMax: Sequelize.INTEGER,
  pasBeg: Sequelize.INTEGER,
  pasMin: Sequelize.INTEGER,
  pasMax: Sequelize.INTEGER,
  salary: Sequelize.INTEGER,
  contractLeft: Sequelize.INTEGER,
  age: Sequelize.INTEGER
})

module.exports = Player
