const Team = require('../models/team.model')
const Player = require('../models/player.model')

const putSalaryCapLeft = async (UserUuid, TeamUuid) => {
  const teams = await Team.findOne({
    where: {
      uuid: TeamUuid
    },
    include: [
      {
        model: Player
      }
    ]
  })

  const salaryTotal = teams.Players.reduce(
    (a, v) => (a = a + v.contractYear1),
    0
  )

  const salaryLeft = 100000000 - salaryTotal

  try {
    await Team.update(
      {
        salaryCapLeft: salaryLeft
      },
      { where: { uuid: TeamUuid } }
    )
  } catch (err) {
    console.log(err)
  }

  return { salaryTotal, salaryLeft, teams }
}

module.exports = putSalaryCapLeft
