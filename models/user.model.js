const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

const sequelizeInstance = require('../sequelize')

const User = sequelizeInstance.define(
  'User',
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    pseudo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [4, 20]
      }
    }
  },
  {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(user.password, salt)
      },
      beforeUpdate: (user) => {
        if (user.changed('password')) {
          const salt = bcrypt.genSaltSync()
          user.password = bcrypt.hashSync(user.get('password'), salt)
        }
      }
    }
  }
)

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = User
