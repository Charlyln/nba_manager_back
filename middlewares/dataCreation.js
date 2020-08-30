const Team = require('../models/team.model')
const Player = require('../models/player.model')

const DataCreation = () => {
  Team.create({
    name: 'Warriors'
  }),
    Team.create({
      name: 'Lakers'
    }),
    Team.create({
      name: 'Clippers'
    }),
    Team.create({
      name: 'Rockets'
    }),
    Team.create({
      name: 'Mavs'
    }),
    Player.create({
      firstName: 'Lebron',
      lastName: 'James'
    })
}

module.exports = DataCreation
