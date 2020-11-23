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
  ptsBeg: Sequelize.FLOAT,
  ptsMin: Sequelize.FLOAT,
  ptsMax: Sequelize.FLOAT,
  rebBeg: Sequelize.FLOAT,
  rebMin: Sequelize.FLOAT,
  rebMax: Sequelize.FLOAT,
  pasBeg: Sequelize.FLOAT,
  pasMin: Sequelize.FLOAT,
  pasMax: Sequelize.FLOAT,
  salary: Sequelize.INTEGER,
  contractLeft: Sequelize.INTEGER,
  age: Sequelize.INTEGER
})

module.exports = Player
