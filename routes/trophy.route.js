const express = require('express')
const earnedTrophy = require('../middlewares/earnedTrophy')
const trophies = express.Router()
const Trophy = require('../models/trophy.model')

trophies.get('/', async (req, res) => {
  try {
    const trophies = await Trophy.findAll()
    res.status(200).json(trophies)
  } catch (err) {
    res.status(400).json(err)
  }
})

trophies.get('/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  try {
    const trophy = await Trophy.findAll({
      where: {
        UserUuid
      }
    })
    res.status(200).json(trophy)
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }
})

trophies.post('/', async (req, res) => {
  const { name, difficulty, earned, UserUuid } = req.body
  try {
    const trophy = await Trophy.create({
      name,
      difficulty,
      earned,
      UserUuid
    })
    res.status(201).json(trophy)
  } catch (err) {
    res.status(422).json(err)
  }
})

trophies.post('/earned/:UserUuid', async (req, res) => {
  const { UserUuid } = req.params
  const { name } = req.body

  try {
    const test = await earnedTrophy(UserUuid, name)

    res.status(201).json(test)
  } catch (err) {
    res.status(422).json(err)
  }
})

// trophies.put('/:uuid', async (req, res) => {
//   const { pseudo } = req.body
//   const uuid = req.params.uuid
//   try {
//     const trophy = await Trophy.update(
//       {
//         pseudo
//       },
//       { where: { uuid } }
//     )
//     res.status(201).json(trophy)
//   } catch (err) {
//     res.status(422).json(err)
//   }
// })

// trophies.delete('/:uuid', async (req, res) => {
//   const uuid = req.params.uuid
//   try {
//     await Trophy.destroy({ where: { uuid } })
//     res.status(204).send('trophy a été supprimé')
//   } catch (err) {
//     res.status(422).json(err)
//   }
// })

module.exports = trophies
