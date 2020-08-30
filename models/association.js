const User = require('./user.model')
const Team = require('./team.model')
const Player = require('./player.model')

User.hasMany(Team, { foreignKey: { allowNull: true } })
Team.belongsTo(User)

Team.hasMany(Player, { foreignKey: { allowNull: false } })
Player.belongsTo(Team)
