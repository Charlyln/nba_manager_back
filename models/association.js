const User = require('./user.model')
const Team = require('./team.model')
const Player = require('./player.model')
const Game = require('./game.model')
const Visitor = require('./visitor.model')
const PlayerStats = require('./playersStats.model')
const Season = require('./season.model')
const Trophy = require('./trophy.model')
const Progress = require('./progress.model')
const Role = require('./role.model')

User.hasMany(Team, { foreignKey: { allowNull: true }, onDelete: 'cascade' })
Team.belongsTo(User)

User.hasMany(Player, { foreignKey: { allowNull: true }, onDelete: 'cascade' })
Player.belongsTo(User)

Role.hasMany(User, { foreignKey: { allowNull: false } })
User.belongsTo(Role, { foreignKey: { allowNull: false } })

User.hasMany(Visitor, { foreignKey: { allowNull: false }, onDelete: 'cascade' })
Visitor.belongsTo(User)

User.hasMany(Game, { foreignKey: { allowNull: true }, onDelete: 'cascade' })
Game.belongsTo(User)

Team.hasMany(Player, { foreignKey: { allowNull: true }, onDelete: 'cascade' })
Player.belongsTo(Team)

Team.hasMany(Visitor, { foreignKey: { allowNull: false } })
Visitor.belongsTo(Team)

Team.hasMany(Game, { foreignKey: { allowNull: false } })
Game.belongsTo(Team)

Visitor.hasMany(Game, { foreignKey: { allowNull: false } })
Game.belongsTo(Visitor)

Player.hasMany(PlayerStats, { foreignKey: { allowNull: false } })
PlayerStats.belongsTo(Player)

Player.hasMany(Progress, { foreignKey: { allowNull: false } })
Progress.belongsTo(Player)

Game.hasMany(PlayerStats, { foreignKey: { allowNull: false } })
PlayerStats.belongsTo(Game)

User.hasMany(PlayerStats, {
  foreignKey: { allowNull: false },
  onDelete: 'cascade'
})
PlayerStats.belongsTo(User)

Season.hasMany(Game, { foreignKey: { allowNull: false } })
Game.belongsTo(Season)

User.hasMany(Season, { foreignKey: { allowNull: false }, onDelete: 'cascade' })
Season.belongsTo(User)

User.hasMany(Trophy, { foreignKey: { allowNull: true }, onDelete: 'cascade' })
Trophy.belongsTo(User)
