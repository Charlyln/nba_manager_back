const express = require('express')
const adjustPlayerValue = require('../middlewares/adjustPlayerValue')
const getProgressCharts = require('../middlewares/getProgressCharts')
const putProgressValuePerSeason = require('../middlewares/putProgressValuePerSeason')
const progress = express.Router()
const Player = require('../models/player.model')
const Progress = require('../models/progress.model')

progress.get('/', async (req, res) => {
  try {
    const progress = await Progress.findAll({
      include: [
        {
          model: Player
        }
      ]
    })
    res.status(200).json(progress)
  } catch (err) {
    res.status(400).json(err)
  }
})

progress.post('/charts/:TeamUuid', async (req, res) => {
  const TeamUuid = req.params.TeamUuid
  try {
    const progress = await getProgressCharts(TeamUuid)
    res.status(200).json(progress)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

progress.post('/season/:UserUuid/:SeasonUuid', async (req, res) => {
  const { UserUuid, SeasonUuid } = req.params
  try {
    const progress = await putProgressValuePerSeason(UserUuid, SeasonUuid)
    res.status(200).json(progress)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

progress.post('/adjsutPlayerValue/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  try {
    const progress = await adjustPlayerValue(UserUuid)
    res.status(200).json(progress)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

progress.put('/:uuid', async (req, res) => {
  const { pseudo } = req.body
  const uuid = req.params.uuid
  try {
    const user = await Progress.update(
      {
        pseudo
      },
      { where: { uuid } }
    )
    res.status(201).json(user)
  } catch (err) {
    res.status(422).json(err)
  }
})

progress.delete('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    await Progress.destroy({ where: { uuid } })
    res.status(204).send('User a été supprimé')
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = progress
