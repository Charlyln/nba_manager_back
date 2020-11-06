const express = require('express')
const seasons = express.Router()
const Season = require('../models/season.model')

// include: [
//   { model: Likes },
//   {
//     model: User,
//     include: [
//       {
//         model: Followers,
//       },
//     ],
//   },

seasons.get('/', async (req, res) => {
  try {
    const seasons = await Season.findAll()
    res.status(200).json(seasons)
  } catch (err) {
    res.status(400).json(err)
  }
})

// seasons.get('/:UserUuid', async (req, res) => {
//   const { UserUuid } = req.params
//   try {
//     const seasons = await Season.findAll({
//       where: {
//         UserUuid
//       },
//       include: [
//         {
//           model: Team
//         },
//         {
//           model: PlayerStats,
//           include: [
//             {
//               model: Player,
//               include: [
//                 {
//                   model: Team
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           model: Visitor,
//           include: [
//             {
//               model: Team,
//               include: [
//                 {
//                   model: Player
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     })
//     res.status(200).json(seasons)
//   } catch (err) {
//     res.status(400).json(err)
//   }
// })

// seasons.get('/', async (req, res) => {
//   try {
//     const seasons = await Season.findAll()
//     res.status(200).json(seasons)
//   } catch (error) {
//     res.status(400).json({
//       status: 'error',
//       message: 'Invalid request'
//     })
//   }
// })

seasons.post('/', async (req, res) => {
  const { startYear, endYear, UserUuid } = req.body
  try {
    const seasons = await Season.create({
      startYear,
      endYear,
      UserUuid
    })
    res.status(201).json(seasons)
  } catch (err) {
    res.status(422).json(err)
  }
})

// seasons.put('/:uuid', async (req, res) => {
//   const uuid = req.params.uuid
//   const { team1, team2 } = req.body
//   try {
//     const seasons = await Season.update(
//       {
//         team1,
//         team2
//       },
//       { where: { uuid } }
//     )
//     res.status(201).json(seasons)
//   } catch (err) {
//     res.status(422).json(err)
//   }
// })

module.exports = seasons
