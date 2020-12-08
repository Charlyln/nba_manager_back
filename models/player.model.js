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
  value: Sequelize.FLOAT,
  ptsBeg: Sequelize.FLOAT,
  ptsMin: Sequelize.FLOAT,
  ptsMax: Sequelize.FLOAT,
  rebBeg: Sequelize.FLOAT,
  rebMin: Sequelize.FLOAT,
  rebMax: Sequelize.FLOAT,
  pasBeg: Sequelize.FLOAT,
  pasMin: Sequelize.FLOAT,
  pasMax: Sequelize.FLOAT,
  blkMin: Sequelize.FLOAT,
  blkMax: Sequelize.FLOAT,
  stlMin: Sequelize.FLOAT,
  stlMax: Sequelize.FLOAT,
  potential: Sequelize.FLOAT,
  salary: Sequelize.INTEGER,
  valueAdjust: Sequelize.FLOAT,
  contractLeft: Sequelize.INTEGER,
  contractYear1: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  contractYear2: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  contractYear3: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  contractYear4: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  age: Sequelize.INTEGER,
  isRookie: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  isBench: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Player
