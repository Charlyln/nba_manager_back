require('dotenv').config()
const express = require('express')
const users = express.Router()
const User = require('../models/user.model')
const Trophy = require('../models/trophy.model')
const Role = require('../models/role.model')
const { SECRET } = process.env
const jwt = require('jsonwebtoken')
const getMulitpledata = require('../functions/getMulitpledata')
const authRole = require('../middlewares/authRole')
const Team = require('../models/team.model')
const Game = require('../models/game.model')
const Season = require('../models/season.model')
const Player = require('../models/player.model')
const getAdminData = require('../functions/getAdminData')

users.get('/', authRole('ADMIN'), async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Trophy
        },
        {
          model: Team
        },
        {
          model: Game
        },
        {
          model: Season
        }
      ]
    })
    res.status(200).json(users)
  } catch (err) {
    res.status(400).json(err)
  }
})

users.get('/admin', authRole('ADMIN'), async (req, res) => {
  try {
    const users = await getAdminData()
    res.status(200).json(users)
  } catch (err) {
    res.status(400).json(err)
  }
})

users.post('/checkPseudo', async (req, res) => {
  const { pseudo } = req.body
  try {
    const users = await User.findAll({ attributes: ['pseudo'] })
    const userFind = users.find((user) => user.pseudo === pseudo)

    if (userFind) {
      res.status(200).json(true)
    } else {
      res.status(200).json(false)
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

users.get('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    const user = await User.findOne({
      where: {
        uuid
      },
      include: [
        {
          model: Trophy
        }
      ]
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

users.get('/account/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    let isExist
    const user = await User.findByPk(uuid)
    if (user) {
      isExist = true
    }
    res.status(200).json(isExist)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

users.post('/', async (req, res) => {
  const { pseudo, password, RoleUuid } = req.body
  try {
    if (!pseudo || !password || !RoleUuid) {
      res.status(422).json({
        message: 'some keys are missing'
      })
    }
    const user = await User.create({
      pseudo,
      password,
      RoleUuid
    })
    res.status(201).json(user)
  } catch (err) {
    res.status(422).json(err)
  }
})

users.post('/login', async (req, res) => {
  const { pseudo, password } = req.body
  try {
    const user = await User.findOne({
      where: {
        pseudo
      },
      include: [
        {
          model: Role
        },
        {
          model: Team
        }
      ]
    })
    const isPasswordValid = user.validPassword(password)

    if (user && isPasswordValid) {
      const payload = {
        uuid: user.dataValues.uuid,
        pseudo: user.dataValues.pseudo,
        role: user.dataValues.Role.name
      }

      const token = jwt.sign(payload, SECRET, {
        expiresIn: '24h'
      })
      delete user.dataValues.password

      if (user.Role.name === 'ADMIN') {
        res.status(200).json({ token, user })
      } else {
        const team = user.Teams.find((team) => team.choice === true)

        const TeamUuid = team.uuid

        const userSeason = await User.findOne({
          where: {
            uuid: user.uuid
          },
          include: [
            {
              model: Season
            }
          ]
        })

        const seasonSorted = userSeason.Seasons.sort(function (a, b) {
          return new Date(Number(b.endYear)) - new Date(Number(a.endYear))
        })

        const SeasonUuid = seasonSorted[0].uuid

        res.status(200).json({ token, user, TeamUuid, SeasonUuid })
      }
    } else {
      res.status(422).json({ message: 'Wrong credentials', error: err.errors })
    }

    // res.status(200).json({ user, isPasswordValid })
  } catch (err) {
    res.status(422).json(err)
  }
})

users.post('/mulitpledata/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  const { TeamUuid, SeasonUuid } = req.body

  try {
    const test = await getMulitpledata(UserUuid, TeamUuid)

    res.status(201).json(test)
  } catch (err) {
    res.status(422).json(err)
  }
})

users.put('/:uuid', async (req, res) => {
  const { pseudo } = req.body
  const uuid = req.params.uuid
  try {
    const user = await User.update(
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

users.delete('/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  try {
    await User.destroy({ where: { uuid } })
    res.status(204).send('User a été supprimé')
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = users
