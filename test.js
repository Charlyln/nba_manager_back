const teams = [
  {
    uuid: 'c22fb8bb-81be-496a-9734-475e7db7acdb',
    name: 'Lakers',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
    choice: null,
    createdAt: '2020-09-22T15:57:40.000Z',
    updatedAt: '2020-09-22T15:57:40.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    Players: []
  },
  {
    uuid: 'd3d5b674-ebd9-41d5-a0ce-51cc42c7bc63',
    name: 'Rockets',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
    choice: null,
    createdAt: '2020-09-22T15:57:40.000Z',
    updatedAt: '2020-09-22T15:57:40.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    Players: []
  },
  {
    uuid: 'e13d206d-abe9-46ff-927a-25135569bda5',
    name: 'Warriors',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
    choice: true,
    createdAt: '2020-09-22T15:57:40.000Z',
    updatedAt: '2020-09-22T15:57:49.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    Players: []
  },
  {
    uuid: 'edd13d206d-abe9-46ff-927a-25135569bda5',
    name: 'Mavs',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
    choice: null,
    createdAt: '2020-09-22T15:57:40.000Z',
    updatedAt: '2020-09-22T15:57:49.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    Players: []
  }
]

const visitors = [
  {
    uuid: '2728c0f6-a95a-4e51-926a-aa8042b742ae',
    name: 'Warriors',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
    createdAt: '2020-09-22T15:57:49.000Z',
    updatedAt: '2020-09-22T15:57:49.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    TeamUuid: 'e13d206d-abe9-46ff-927a-25135569bda5',
    Team: {
      uuid: 'e13d206d-abe9-46ff-927a-25135569bda5',
      name: 'Warriors',
      logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
      choice: true,
      createdAt: '2020-09-22T15:57:40.000Z',
      updatedAt: '2020-09-22T15:57:49.000Z',
      UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1'
    }
  },
  {
    uuid: '4312765e-2e27-4997-9025-a63da978a310',
    name: 'Lakers',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
    createdAt: '2020-09-22T15:57:49.000Z',
    updatedAt: '2020-09-22T15:57:49.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    TeamUuid: 'c22fb8bb-81be-496a-9734-475e7db7acdb',
    Team: {
      uuid: 'c22fb8bb-81be-496a-9734-475e7db7acdb',
      name: 'Lakers',
      logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
      choice: null,
      createdAt: '2020-09-22T15:57:40.000Z',
      updatedAt: '2020-09-22T15:57:40.000Z',
      UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1'
    }
  },
  {
    uuid: 'efcd5237-acdf-432d-9174-f83335c8d482',
    name: 'Rockets',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
    createdAt: '2020-09-22T15:57:49.000Z',
    updatedAt: '2020-09-22T15:57:49.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    TeamUuid: 'd3d5b674-ebd9-41d5-a0ce-51cc42c7bc63',
    Team: {
      uuid: 'd3d5b674-ebd9-41d5-a0ce-51cc42c7bc63',
      name: 'Rockets',
      logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
      choice: null,
      createdAt: '2020-09-22T15:57:40.000Z',
      updatedAt: '2020-09-22T15:57:40.000Z',
      UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1'
    }
  },
  {
    uuid: 'edfcd5237-acdf-432d-9174-f83335c8d482',
    name: 'Mavs',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
    createdAt: '2020-09-22T15:57:49.000Z',
    updatedAt: '2020-09-22T15:57:49.000Z',
    UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1',
    TeamUuid: 'edd13d206d-abe9-46ff-927a-25135569bda5',
    Team: {
      uuid: 'edd13d206d-abe9-46ff-927a-25135569bda5',
      name: 'Mavs',
      logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
      choice: null,
      createdAt: '2020-09-22T15:57:40.000Z',
      updatedAt: '2020-09-22T15:57:40.000Z',
      UserUuid: 'f852c75d-3d04-4744-8ae0-0a10c0cebbb1'
    }
  }
]

let dayNumber =
  (teams.length * teams.length - teams.length) / (teams.length / 2)
let allGames = []
console.log(dayNumber)

// for (let i = 0; i < gamesNumber / 2; i++) {
//   const object = []
//   teams.map((team) => object.push(team.name))
//   allGames.push(object)
// }
// console.log(allGames)

let games = []

const maped = teams.map((team) => {
  const filtered = visitors
    .filter((visitor) => team.uuid !== visitor.TeamUuid)
    .map((visitor) => {
      games.push(visitor.name + ' ' + team.name)
    })
  // console.log(filtered)
  return filtered
})
console.log(games)

for (let i = 0; i < dayNumber; i++) {
  const object = []
  for (let i = 0; i < teams.length / 2; i++) {
    const team = teams.find((team) => team.name)
    object.push(team.name)
  }
  allGames.push(object)
}
console.log(allGames)

// console.log(maped)
// console.log(allGames)
// first create all games and create night if team is not in it

// const maped = games.map((game) => {
//   const filtered =
//   return game
// })

// console.log(maped)

// const allGamesFiltered = allGames.map((game) => {
//   return game
// })

// console.log(allGamesFiltered)

// const games = [
//   {
//     uuid: '1b835494-ed16-4068-9fcf-f43128f4c59f',
//     date: '2',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//     VisitorUuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       Team: {
//         uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//         name: 'Warriors',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//         choice: true,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:31.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '2e675f1b-e95d-4dcc-a5c8-4d5b7e3f58a4',
//             firstName: 'Stephen',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
//             value: 96,
//             ptsMin: 15,
//             ptsMax: 50,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: '567c8d94-8d03-4520-b54f-0c4f3f921ce6',
//             firstName: 'Kevon',
//             lastName: 'Looney',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png&w=350&h=254',
//             value: 80,
//             ptsMin: 6,
//             ptsMax: 14,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'c039dc02-93c4-47c3-9229-663ca399e225',
//             firstName: 'Draymond',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254',
//             value: 87,
//             ptsMin: 5,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'e21ad3fa-ae27-4b96-9797-6e7d01b53a93',
//             firstName: 'Andrew',
//             lastName: 'Wiggins',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 28,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'ebbfac49-d480-488c-9163-c4b3917c0180',
//             firstName: 'Klay',
//             lastName: 'Thompson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254',
//             value: 91,
//             ptsMin: 10,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '2402d7fa-0096-40c9-b486-d35b8f238f52',
//     date: '4',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//     VisitorUuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       Team: {
//         uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//         name: 'Mavs',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '16fa9a9e-0b71-473d-bd29-c82d3e9a4b52',
//             firstName: 'Seth',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png&w=350&h=254',
//             value: 79,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: '3f82c714-8215-45c8-8b74-3d9c5aaa8d8d',
//             firstName: 'Tim',
//             lastName: 'Hardaway Jr.',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528210.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'a428d156-6c0c-4da7-b534-190156c1e3a0',
//             firstName: 'Luka',
//             lastName: 'Doncic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
//             value: 93,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'd9b5d6b1-65b3-47e8-8be0-860e0cbc3bf3',
//             firstName: 'Dwight',
//             lastName: 'Powell',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png&w=350&h=254',
//             value: 76,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'f53f7498-39a9-4dd9-a91a-fae635693744',
//             firstName: 'Kristaps',
//             lastName: 'Porzingis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png&w=350&h=254',
//             value: 86,
//             ptsMin: 10,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '260e4691-a688-496d-9b10-9bb03d6f2695',
//     date: '5',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//     VisitorUuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       choice: true,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       Team: {
//         uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//         name: 'Mavs',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '16fa9a9e-0b71-473d-bd29-c82d3e9a4b52',
//             firstName: 'Seth',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png&w=350&h=254',
//             value: 79,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: '3f82c714-8215-45c8-8b74-3d9c5aaa8d8d',
//             firstName: 'Tim',
//             lastName: 'Hardaway Jr.',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528210.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'a428d156-6c0c-4da7-b534-190156c1e3a0',
//             firstName: 'Luka',
//             lastName: 'Doncic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
//             value: 93,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'd9b5d6b1-65b3-47e8-8be0-860e0cbc3bf3',
//             firstName: 'Dwight',
//             lastName: 'Powell',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png&w=350&h=254',
//             value: 76,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'f53f7498-39a9-4dd9-a91a-fae635693744',
//             firstName: 'Kristaps',
//             lastName: 'Porzingis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png&w=350&h=254',
//             value: 86,
//             ptsMin: 10,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '30ba3f4b-2496-4551-80d4-1435884b246a',
//     date: '5',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//     VisitorUuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       choice: true,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       Team: {
//         uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//         name: 'Celtics',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0f58a409-8165-4641-a007-50faafde27ab',
//             firstName: 'Kemba',
//             lastName: 'Walker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png&w=350&h=254',
//             value: 89,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: '7f69adb1-e4f8-47f8-b2a1-ef5e3372022b',
//             firstName: 'Jaylen',
//             lastName: 'Brown',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254',
//             value: 87,
//             ptsMin: 20,
//             ptsMax: 25,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'b64be67e-7d5b-4b1e-8b32-71a6a7742596',
//             firstName: 'Marcus',
//             lastName: 'Smart',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'ee6673ac-cf74-4625-9ae8-7a1a70144f7e',
//             firstName: 'Daniel',
//             lastName: 'Theis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png&w=350&h=254',
//             value: 78,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'f95d349e-8818-49a4-877b-d8bfc5fbf157',
//             firstName: 'Jayson',
//             lastName: 'Tatum',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '3f81585c-5bab-4d03-b45a-3c5d2ac3f410',
//     date: '3',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//     VisitorUuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       Team: {
//         uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//         name: 'Rockets',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '6df3fab1-5810-49d4-a9b6-deec24958e15',
//             firstName: 'P.J.',
//             lastName: 'Tucker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'cb17031f-f4ec-4b08-8b4e-f95a70913cee',
//             firstName: 'Russell',
//             lastName: 'Westbrook',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'dcf03cca-12ea-4784-8272-6386eb4dea00',
//             firstName: 'James',
//             lastName: 'Harden',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'e1cbe8b5-7bd9-4756-bf75-f07f024351e7',
//             firstName: 'Robert',
//             lastName: 'Covington',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490620.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'f27f4b75-19f8-495c-a1d4-ae94e3e26de7',
//             firstName: 'Eric',
//             lastName: 'Gordon',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png&w=350&h=254',
//             value: 83,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '405bce5c-fac7-4252-b86e-a7051c83fdf4',
//     date: '0',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//     VisitorUuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       Team: {
//         uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//         name: 'Rockets',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '6df3fab1-5810-49d4-a9b6-deec24958e15',
//             firstName: 'P.J.',
//             lastName: 'Tucker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'cb17031f-f4ec-4b08-8b4e-f95a70913cee',
//             firstName: 'Russell',
//             lastName: 'Westbrook',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'dcf03cca-12ea-4784-8272-6386eb4dea00',
//             firstName: 'James',
//             lastName: 'Harden',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'e1cbe8b5-7bd9-4756-bf75-f07f024351e7',
//             firstName: 'Robert',
//             lastName: 'Covington',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490620.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'f27f4b75-19f8-495c-a1d4-ae94e3e26de7',
//             firstName: 'Eric',
//             lastName: 'Gordon',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png&w=350&h=254',
//             value: 83,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '4402c43f-6286-4047-966b-f4caebaf13f0',
//     date: '4',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//     VisitorUuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       Team: {
//         uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//         name: 'Warriors',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//         choice: true,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:31.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '2e675f1b-e95d-4dcc-a5c8-4d5b7e3f58a4',
//             firstName: 'Stephen',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
//             value: 96,
//             ptsMin: 15,
//             ptsMax: 50,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: '567c8d94-8d03-4520-b54f-0c4f3f921ce6',
//             firstName: 'Kevon',
//             lastName: 'Looney',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png&w=350&h=254',
//             value: 80,
//             ptsMin: 6,
//             ptsMax: 14,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'c039dc02-93c4-47c3-9229-663ca399e225',
//             firstName: 'Draymond',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254',
//             value: 87,
//             ptsMin: 5,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'e21ad3fa-ae27-4b96-9797-6e7d01b53a93',
//             firstName: 'Andrew',
//             lastName: 'Wiggins',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 28,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'ebbfac49-d480-488c-9163-c4b3917c0180',
//             firstName: 'Klay',
//             lastName: 'Thompson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254',
//             value: 91,
//             ptsMin: 10,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '50ebfbd5-8200-4cb8-a3e3-91bc0fbf3cdc',
//     date: '3',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//     VisitorUuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       Team: {
//         uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//         name: 'Warriors',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//         choice: true,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:31.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '2e675f1b-e95d-4dcc-a5c8-4d5b7e3f58a4',
//             firstName: 'Stephen',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
//             value: 96,
//             ptsMin: 15,
//             ptsMax: 50,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: '567c8d94-8d03-4520-b54f-0c4f3f921ce6',
//             firstName: 'Kevon',
//             lastName: 'Looney',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png&w=350&h=254',
//             value: 80,
//             ptsMin: 6,
//             ptsMax: 14,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'c039dc02-93c4-47c3-9229-663ca399e225',
//             firstName: 'Draymond',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254',
//             value: 87,
//             ptsMin: 5,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'e21ad3fa-ae27-4b96-9797-6e7d01b53a93',
//             firstName: 'Andrew',
//             lastName: 'Wiggins',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 28,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'ebbfac49-d480-488c-9163-c4b3917c0180',
//             firstName: 'Klay',
//             lastName: 'Thompson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254',
//             value: 91,
//             ptsMin: 10,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '51d2a45a-cba0-43b3-93ab-da313024b616',
//     date: '2',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//     VisitorUuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       Team: {
//         uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//         name: 'Mavs',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '16fa9a9e-0b71-473d-bd29-c82d3e9a4b52',
//             firstName: 'Seth',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png&w=350&h=254',
//             value: 79,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: '3f82c714-8215-45c8-8b74-3d9c5aaa8d8d',
//             firstName: 'Tim',
//             lastName: 'Hardaway Jr.',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528210.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'a428d156-6c0c-4da7-b534-190156c1e3a0',
//             firstName: 'Luka',
//             lastName: 'Doncic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
//             value: 93,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'd9b5d6b1-65b3-47e8-8be0-860e0cbc3bf3',
//             firstName: 'Dwight',
//             lastName: 'Powell',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png&w=350&h=254',
//             value: 76,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'f53f7498-39a9-4dd9-a91a-fae635693744',
//             firstName: 'Kristaps',
//             lastName: 'Porzingis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png&w=350&h=254',
//             value: 86,
//             ptsMin: 10,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '586420ee-8211-44d0-9d99-cfff8f8e29c4',
//     date: '5',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//     VisitorUuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       choice: true,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       Team: {
//         uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//         name: 'Lakers',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '19e15955-cec7-4ad2-96de-b8b02b02ff5b',
//             firstName: 'Lebron',
//             lastName: 'James',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
//             value: 97,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: '345b3ac2-5f7b-4518-9cfc-f18765691700',
//             firstName: 'JaVale',
//             lastName: 'McGee',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3452.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'cefc9adb-2d52-4ad8-a100-8ec17709bdd5',
//             firstName: 'Danny',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png&w=350&h=254',
//             value: 78,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'ed13fd77-ef8d-4da2-b4d3-48799cc61b2b',
//             firstName: 'Kentavious',
//             lastName: 'Caldwell-pope',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581018.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'f810215d-60f1-4d6b-be49-359ecc56e4d7',
//             firstName: 'Anthony',
//             lastName: 'Davis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254',
//             value: 91,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '5cd716c4-f649-471a-a1c3-bb942ee6a932',
//     date: '0',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//     VisitorUuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       Team: {
//         uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//         name: 'Heat',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0b54d85c-f5a6-45b4-a9e9-0b2aa1ff31a7',
//             firstName: 'Duncan',
//             lastName: 'Robinson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3157465.png&w=350&h=254',
//             value: 77,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '14a06464-525f-41bc-b286-a7be95b43904',
//             firstName: 'Bam',
//             lastName: 'Adebayo',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '3912ce71-d8bb-4241-85db-40d4cf174578',
//             firstName: 'Jimmy',
//             lastName: 'Butler',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '64cce7f7-f0e5-4405-a94b-c07a18906d04',
//             firstName: 'Goran',
//             lastName: 'Dragic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png&w=350&h=254',
//             value: 85,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: 'dedeb19d-29b0-4c0f-8883-8a40451a8574',
//             firstName: 'Jae',
//             lastName: 'Crowder',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6581.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '5e4a2f9a-146b-4ea0-aeab-819f451ba6e8',
//     date: '2',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//     VisitorUuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       Team: {
//         uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//         name: 'Celtics',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0f58a409-8165-4641-a007-50faafde27ab',
//             firstName: 'Kemba',
//             lastName: 'Walker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png&w=350&h=254',
//             value: 89,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: '7f69adb1-e4f8-47f8-b2a1-ef5e3372022b',
//             firstName: 'Jaylen',
//             lastName: 'Brown',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254',
//             value: 87,
//             ptsMin: 20,
//             ptsMax: 25,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'b64be67e-7d5b-4b1e-8b32-71a6a7742596',
//             firstName: 'Marcus',
//             lastName: 'Smart',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'ee6673ac-cf74-4625-9ae8-7a1a70144f7e',
//             firstName: 'Daniel',
//             lastName: 'Theis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png&w=350&h=254',
//             value: 78,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'f95d349e-8818-49a4-877b-d8bfc5fbf157',
//             firstName: 'Jayson',
//             lastName: 'Tatum',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '63d5e955-3aa9-429e-9d89-6da54e492b55',
//     date: '5',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//     VisitorUuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       choice: true,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       Team: {
//         uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//         name: 'Heat',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0b54d85c-f5a6-45b4-a9e9-0b2aa1ff31a7',
//             firstName: 'Duncan',
//             lastName: 'Robinson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3157465.png&w=350&h=254',
//             value: 77,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '14a06464-525f-41bc-b286-a7be95b43904',
//             firstName: 'Bam',
//             lastName: 'Adebayo',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '3912ce71-d8bb-4241-85db-40d4cf174578',
//             firstName: 'Jimmy',
//             lastName: 'Butler',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '64cce7f7-f0e5-4405-a94b-c07a18906d04',
//             firstName: 'Goran',
//             lastName: 'Dragic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png&w=350&h=254',
//             value: 85,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: 'dedeb19d-29b0-4c0f-8883-8a40451a8574',
//             firstName: 'Jae',
//             lastName: 'Crowder',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6581.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '68fd4264-b3e3-4b68-97e9-6931ebc777f7',
//     date: '3',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//     VisitorUuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       Team: {
//         uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//         name: 'Celtics',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0f58a409-8165-4641-a007-50faafde27ab',
//             firstName: 'Kemba',
//             lastName: 'Walker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png&w=350&h=254',
//             value: 89,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: '7f69adb1-e4f8-47f8-b2a1-ef5e3372022b',
//             firstName: 'Jaylen',
//             lastName: 'Brown',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254',
//             value: 87,
//             ptsMin: 20,
//             ptsMax: 25,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'b64be67e-7d5b-4b1e-8b32-71a6a7742596',
//             firstName: 'Marcus',
//             lastName: 'Smart',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'ee6673ac-cf74-4625-9ae8-7a1a70144f7e',
//             firstName: 'Daniel',
//             lastName: 'Theis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png&w=350&h=254',
//             value: 78,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'f95d349e-8818-49a4-877b-d8bfc5fbf157',
//             firstName: 'Jayson',
//             lastName: 'Tatum',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '6c6806e7-1299-4b84-8278-3884842b51e5',
//     date: '3',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//     VisitorUuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       Team: {
//         uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//         name: 'Mavs',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '16fa9a9e-0b71-473d-bd29-c82d3e9a4b52',
//             firstName: 'Seth',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png&w=350&h=254',
//             value: 79,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: '3f82c714-8215-45c8-8b74-3d9c5aaa8d8d',
//             firstName: 'Tim',
//             lastName: 'Hardaway Jr.',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528210.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'a428d156-6c0c-4da7-b534-190156c1e3a0',
//             firstName: 'Luka',
//             lastName: 'Doncic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
//             value: 93,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'd9b5d6b1-65b3-47e8-8be0-860e0cbc3bf3',
//             firstName: 'Dwight',
//             lastName: 'Powell',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png&w=350&h=254',
//             value: 76,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'f53f7498-39a9-4dd9-a91a-fae635693744',
//             firstName: 'Kristaps',
//             lastName: 'Porzingis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png&w=350&h=254',
//             value: 86,
//             ptsMin: 10,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '6e779bdd-3ca4-4622-980f-7a171d39109e',
//     date: '0',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//     VisitorUuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       Team: {
//         uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//         name: 'Lakers',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '19e15955-cec7-4ad2-96de-b8b02b02ff5b',
//             firstName: 'Lebron',
//             lastName: 'James',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
//             value: 97,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: '345b3ac2-5f7b-4518-9cfc-f18765691700',
//             firstName: 'JaVale',
//             lastName: 'McGee',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3452.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'cefc9adb-2d52-4ad8-a100-8ec17709bdd5',
//             firstName: 'Danny',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png&w=350&h=254',
//             value: 78,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'ed13fd77-ef8d-4da2-b4d3-48799cc61b2b',
//             firstName: 'Kentavious',
//             lastName: 'Caldwell-pope',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581018.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'f810215d-60f1-4d6b-be49-359ecc56e4d7',
//             firstName: 'Anthony',
//             lastName: 'Davis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254',
//             value: 91,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '71347136-684e-48e7-a1f5-dd298854789d',
//     date: '1',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//     VisitorUuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       Team: {
//         uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//         name: 'Heat',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0b54d85c-f5a6-45b4-a9e9-0b2aa1ff31a7',
//             firstName: 'Duncan',
//             lastName: 'Robinson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3157465.png&w=350&h=254',
//             value: 77,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '14a06464-525f-41bc-b286-a7be95b43904',
//             firstName: 'Bam',
//             lastName: 'Adebayo',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '3912ce71-d8bb-4241-85db-40d4cf174578',
//             firstName: 'Jimmy',
//             lastName: 'Butler',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '64cce7f7-f0e5-4405-a94b-c07a18906d04',
//             firstName: 'Goran',
//             lastName: 'Dragic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png&w=350&h=254',
//             value: 85,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: 'dedeb19d-29b0-4c0f-8883-8a40451a8574',
//             firstName: 'Jae',
//             lastName: 'Crowder',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6581.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '83807abe-f3d8-44da-88e8-827b4d306fc5',
//     date: '2',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//     VisitorUuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       Team: {
//         uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//         name: 'Rockets',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '6df3fab1-5810-49d4-a9b6-deec24958e15',
//             firstName: 'P.J.',
//             lastName: 'Tucker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'cb17031f-f4ec-4b08-8b4e-f95a70913cee',
//             firstName: 'Russell',
//             lastName: 'Westbrook',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'dcf03cca-12ea-4784-8272-6386eb4dea00',
//             firstName: 'James',
//             lastName: 'Harden',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'e1cbe8b5-7bd9-4756-bf75-f07f024351e7',
//             firstName: 'Robert',
//             lastName: 'Covington',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490620.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'f27f4b75-19f8-495c-a1d4-ae94e3e26de7',
//             firstName: 'Eric',
//             lastName: 'Gordon',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png&w=350&h=254',
//             value: 83,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '841c6129-cb83-47b9-b2ec-b8aff0a06897',
//     date: '1',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//     VisitorUuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       Team: {
//         uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//         name: 'Celtics',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0f58a409-8165-4641-a007-50faafde27ab',
//             firstName: 'Kemba',
//             lastName: 'Walker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png&w=350&h=254',
//             value: 89,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: '7f69adb1-e4f8-47f8-b2a1-ef5e3372022b',
//             firstName: 'Jaylen',
//             lastName: 'Brown',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254',
//             value: 87,
//             ptsMin: 20,
//             ptsMax: 25,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'b64be67e-7d5b-4b1e-8b32-71a6a7742596',
//             firstName: 'Marcus',
//             lastName: 'Smart',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'ee6673ac-cf74-4625-9ae8-7a1a70144f7e',
//             firstName: 'Daniel',
//             lastName: 'Theis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png&w=350&h=254',
//             value: 78,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'f95d349e-8818-49a4-877b-d8bfc5fbf157',
//             firstName: 'Jayson',
//             lastName: 'Tatum',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: '9e8ec9bd-132f-41bd-828f-daf6f2810082',
//     date: '4',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//     VisitorUuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       Team: {
//         uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//         name: 'Lakers',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '19e15955-cec7-4ad2-96de-b8b02b02ff5b',
//             firstName: 'Lebron',
//             lastName: 'James',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
//             value: 97,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: '345b3ac2-5f7b-4518-9cfc-f18765691700',
//             firstName: 'JaVale',
//             lastName: 'McGee',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3452.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'cefc9adb-2d52-4ad8-a100-8ec17709bdd5',
//             firstName: 'Danny',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png&w=350&h=254',
//             value: 78,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'ed13fd77-ef8d-4da2-b4d3-48799cc61b2b',
//             firstName: 'Kentavious',
//             lastName: 'Caldwell-pope',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581018.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'f810215d-60f1-4d6b-be49-359ecc56e4d7',
//             firstName: 'Anthony',
//             lastName: 'Davis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254',
//             value: 91,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'a31224a9-b5f3-4cea-ad14-7b04d4ed8f65',
//     date: '1',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//     VisitorUuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       Team: {
//         uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//         name: 'Lakers',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '19e15955-cec7-4ad2-96de-b8b02b02ff5b',
//             firstName: 'Lebron',
//             lastName: 'James',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
//             value: 97,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: '345b3ac2-5f7b-4518-9cfc-f18765691700',
//             firstName: 'JaVale',
//             lastName: 'McGee',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3452.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'cefc9adb-2d52-4ad8-a100-8ec17709bdd5',
//             firstName: 'Danny',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png&w=350&h=254',
//             value: 78,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'ed13fd77-ef8d-4da2-b4d3-48799cc61b2b',
//             firstName: 'Kentavious',
//             lastName: 'Caldwell-pope',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581018.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'f810215d-60f1-4d6b-be49-359ecc56e4d7',
//             firstName: 'Anthony',
//             lastName: 'Davis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254',
//             value: 91,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'abb53e9b-60f3-4983-a92e-ce196b6895b8',
//     date: '4',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//     VisitorUuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       Team: {
//         uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//         name: 'Heat',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0b54d85c-f5a6-45b4-a9e9-0b2aa1ff31a7',
//             firstName: 'Duncan',
//             lastName: 'Robinson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3157465.png&w=350&h=254',
//             value: 77,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '14a06464-525f-41bc-b286-a7be95b43904',
//             firstName: 'Bam',
//             lastName: 'Adebayo',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '3912ce71-d8bb-4241-85db-40d4cf174578',
//             firstName: 'Jimmy',
//             lastName: 'Butler',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '64cce7f7-f0e5-4405-a94b-c07a18906d04',
//             firstName: 'Goran',
//             lastName: 'Dragic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png&w=350&h=254',
//             value: 85,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: 'dedeb19d-29b0-4c0f-8883-8a40451a8574',
//             firstName: 'Jae',
//             lastName: 'Crowder',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6581.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'acc9284f-069b-4f94-9d5b-1bce11a80a88',
//     date: '3',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//     VisitorUuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'e2fab022-a73b-4707-ac69-ca7cbabb38a1',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       Team: {
//         uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//         name: 'Lakers',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '19e15955-cec7-4ad2-96de-b8b02b02ff5b',
//             firstName: 'Lebron',
//             lastName: 'James',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
//             value: 97,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: '345b3ac2-5f7b-4518-9cfc-f18765691700',
//             firstName: 'JaVale',
//             lastName: 'McGee',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3452.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'cefc9adb-2d52-4ad8-a100-8ec17709bdd5',
//             firstName: 'Danny',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png&w=350&h=254',
//             value: 78,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'ed13fd77-ef8d-4da2-b4d3-48799cc61b2b',
//             firstName: 'Kentavious',
//             lastName: 'Caldwell-pope',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581018.png&w=350&h=254',
//             value: 77,
//             ptsMin: 6,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           },
//           {
//             uuid: 'f810215d-60f1-4d6b-be49-359ecc56e4d7',
//             firstName: 'Anthony',
//             lastName: 'Davis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254',
//             value: 91,
//             ptsMin: 15,
//             ptsMax: 35,
//             rebMin: 5,
//             rebMax: 15,
//             pasMin: 5,
//             pasMax: 15,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'afb3d209-0622-49ad-8244-85bae6ec5852',
//     date: '0',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//     VisitorUuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '5145188c-faf1-4376-992b-a717ea354d9a',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       Team: {
//         uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//         name: 'Celtics',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0f58a409-8165-4641-a007-50faafde27ab',
//             firstName: 'Kemba',
//             lastName: 'Walker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png&w=350&h=254',
//             value: 89,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: '7f69adb1-e4f8-47f8-b2a1-ef5e3372022b',
//             firstName: 'Jaylen',
//             lastName: 'Brown',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254',
//             value: 87,
//             ptsMin: 20,
//             ptsMax: 25,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'b64be67e-7d5b-4b1e-8b32-71a6a7742596',
//             firstName: 'Marcus',
//             lastName: 'Smart',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'ee6673ac-cf74-4625-9ae8-7a1a70144f7e',
//             firstName: 'Daniel',
//             lastName: 'Theis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png&w=350&h=254',
//             value: 78,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           },
//           {
//             uuid: 'f95d349e-8818-49a4-877b-d8bfc5fbf157',
//             firstName: 'Jayson',
//             lastName: 'Tatum',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'b8d7d0bb-a5b4-4f86-9911-dd6e95c947cc',
//     date: '0',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//     VisitorUuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       Team: {
//         uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//         name: 'Warriors',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//         choice: true,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:31.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '2e675f1b-e95d-4dcc-a5c8-4d5b7e3f58a4',
//             firstName: 'Stephen',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
//             value: 96,
//             ptsMin: 15,
//             ptsMax: 50,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: '567c8d94-8d03-4520-b54f-0c4f3f921ce6',
//             firstName: 'Kevon',
//             lastName: 'Looney',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png&w=350&h=254',
//             value: 80,
//             ptsMin: 6,
//             ptsMax: 14,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'c039dc02-93c4-47c3-9229-663ca399e225',
//             firstName: 'Draymond',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254',
//             value: 87,
//             ptsMin: 5,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'e21ad3fa-ae27-4b96-9797-6e7d01b53a93',
//             firstName: 'Andrew',
//             lastName: 'Wiggins',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 28,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'ebbfac49-d480-488c-9163-c4b3917c0180',
//             firstName: 'Klay',
//             lastName: 'Thompson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254',
//             value: 91,
//             ptsMin: 10,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'c70a24fc-7e53-41cb-a8b8-873f2c94d793',
//     date: '5',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//     VisitorUuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       choice: true,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       Team: {
//         uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//         name: 'Rockets',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '6df3fab1-5810-49d4-a9b6-deec24958e15',
//             firstName: 'P.J.',
//             lastName: 'Tucker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'cb17031f-f4ec-4b08-8b4e-f95a70913cee',
//             firstName: 'Russell',
//             lastName: 'Westbrook',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'dcf03cca-12ea-4784-8272-6386eb4dea00',
//             firstName: 'James',
//             lastName: 'Harden',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'e1cbe8b5-7bd9-4756-bf75-f07f024351e7',
//             firstName: 'Robert',
//             lastName: 'Covington',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490620.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'f27f4b75-19f8-495c-a1d4-ae94e3e26de7',
//             firstName: 'Eric',
//             lastName: 'Gordon',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png&w=350&h=254',
//             value: 83,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'e39f96d0-90d3-4cae-9c6c-c3189981f645',
//     date: '4',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//     VisitorUuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'b894d7e0-fcf3-4629-87b5-73ca2180df3c',
//       name: 'Celtics',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '4c4f04b8-c39f-4bec-92e1-145f52aadf0a',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       Team: {
//         uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//         name: 'Rockets',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '6df3fab1-5810-49d4-a9b6-deec24958e15',
//             firstName: 'P.J.',
//             lastName: 'Tucker',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'cb17031f-f4ec-4b08-8b4e-f95a70913cee',
//             firstName: 'Russell',
//             lastName: 'Westbrook',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'dcf03cca-12ea-4784-8272-6386eb4dea00',
//             firstName: 'James',
//             lastName: 'Harden',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
//             value: 90,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'e1cbe8b5-7bd9-4756-bf75-f07f024351e7',
//             firstName: 'Robert',
//             lastName: 'Covington',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490620.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           },
//           {
//             uuid: 'f27f4b75-19f8-495c-a1d4-ae94e3e26de7',
//             firstName: 'Eric',
//             lastName: 'Gordon',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png&w=350&h=254',
//             value: 83,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'f2e8b757-69e7-4a7c-a939-dbb4322b454b',
//     date: '2',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//     VisitorUuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: 'ad680a4d-698f-4306-a3ae-688f1737e359',
//       name: 'Lakers',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: '6275d78e-c0c4-4a7f-8506-4cd2d7e30eaa',
//       name: 'Heat',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//       Team: {
//         uuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81',
//         name: 'Heat',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '0b54d85c-f5a6-45b4-a9e9-0b2aa1ff31a7',
//             firstName: 'Duncan',
//             lastName: 'Robinson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3157465.png&w=350&h=254',
//             value: 77,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '14a06464-525f-41bc-b286-a7be95b43904',
//             firstName: 'Bam',
//             lastName: 'Adebayo',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '3912ce71-d8bb-4241-85db-40d4cf174578',
//             firstName: 'Jimmy',
//             lastName: 'Butler',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254',
//             value: 91,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: '64cce7f7-f0e5-4405-a94b-c07a18906d04',
//             firstName: 'Goran',
//             lastName: 'Dragic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png&w=350&h=254',
//             value: 85,
//             ptsMin: 20,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           },
//           {
//             uuid: 'dedeb19d-29b0-4c0f-8883-8a40451a8574',
//             firstName: 'Jae',
//             lastName: 'Crowder',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6581.png&w=350&h=254',
//             value: 80,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'b88955d0-a4e8-4a9f-903f-de2c821bbc81'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'f448f0bf-9afc-4f5c-b833-39335a73b004',
//     date: '1',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//     VisitorUuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc96a580-848e-4789-95e2-21f6b796b49e',
//       name: 'Mavs',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//       Team: {
//         uuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d',
//         name: 'Mavs',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
//         choice: null,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:23.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '16fa9a9e-0b71-473d-bd29-c82d3e9a4b52',
//             firstName: 'Seth',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png&w=350&h=254',
//             value: 79,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: '3f82c714-8215-45c8-8b74-3d9c5aaa8d8d',
//             firstName: 'Tim',
//             lastName: 'Hardaway Jr.',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528210.png&w=350&h=254',
//             value: 81,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'a428d156-6c0c-4da7-b534-190156c1e3a0',
//             firstName: 'Luka',
//             lastName: 'Doncic',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
//             value: 93,
//             ptsMin: 20,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'd9b5d6b1-65b3-47e8-8be0-860e0cbc3bf3',
//             firstName: 'Dwight',
//             lastName: 'Powell',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png&w=350&h=254',
//             value: 76,
//             ptsMin: 10,
//             ptsMax: 20,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           },
//           {
//             uuid: 'f53f7498-39a9-4dd9-a91a-fae635693744',
//             firstName: 'Kristaps',
//             lastName: 'Porzingis',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png&w=350&h=254',
//             value: 86,
//             ptsMin: 10,
//             ptsMax: 30,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: '3371e67f-eef6-4535-8c22-743ea0fb1a3d'
//           }
//         ]
//       }
//     }
//   },
//   {
//     uuid: 'f61d1a3b-5ce3-453f-bd0e-9d06497d1ba7',
//     date: '1',
//     team1: null,
//     team2: null,
//     createdAt: '2020-09-22T22:01:33.000Z',
//     updatedAt: '2020-09-22T22:01:33.000Z',
//     UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//     TeamUuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//     VisitorUuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//     SeasonUuid: '509ed09c-4ee9-4def-9cfb-a3eeac490953',
//     Team: {
//       uuid: '4003dc6a-486d-4a3c-b5aa-0ef4d793d7fc',
//       name: 'Rockets',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
//       choice: null,
//       createdAt: '2020-09-22T22:01:23.000Z',
//       updatedAt: '2020-09-22T22:01:23.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7'
//     },
//     PlayerStats: [],
//     Visitor: {
//       uuid: 'cc4a4e4a-ae77-4651-84c8-e1cb933f1862',
//       name: 'Warriors',
//       logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//       createdAt: '2020-09-22T22:01:31.000Z',
//       updatedAt: '2020-09-22T22:01:31.000Z',
//       UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//       TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//       Team: {
//         uuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a',
//         name: 'Warriors',
//         logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
//         choice: true,
//         createdAt: '2020-09-22T22:01:23.000Z',
//         updatedAt: '2020-09-22T22:01:31.000Z',
//         UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//         Players: [
//           {
//             uuid: '2e675f1b-e95d-4dcc-a5c8-4d5b7e3f58a4',
//             firstName: 'Stephen',
//             lastName: 'Curry',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
//             value: 96,
//             ptsMin: 15,
//             ptsMax: 50,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: '567c8d94-8d03-4520-b54f-0c4f3f921ce6',
//             firstName: 'Kevon',
//             lastName: 'Looney',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png&w=350&h=254',
//             value: 80,
//             ptsMin: 6,
//             ptsMax: 14,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'c039dc02-93c4-47c3-9229-663ca399e225',
//             firstName: 'Draymond',
//             lastName: 'Green',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254',
//             value: 87,
//             ptsMin: 5,
//             ptsMax: 18,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'e21ad3fa-ae27-4b96-9797-6e7d01b53a93',
//             firstName: 'Andrew',
//             lastName: 'Wiggins',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png&w=350&h=254',
//             value: 85,
//             ptsMin: 10,
//             ptsMax: 28,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           },
//           {
//             uuid: 'ebbfac49-d480-488c-9163-c4b3917c0180',
//             firstName: 'Klay',
//             lastName: 'Thompson',
//             photo:
//               'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254',
//             value: 91,
//             ptsMin: 10,
//             ptsMax: 40,
//             rebMin: 5,
//             rebMax: 12,
//             pasMin: 5,
//             pasMax: 12,
//             createdAt: '2020-09-22T22:01:23.000Z',
//             updatedAt: '2020-09-22T22:01:23.000Z',
//             UserUuid: '1cbd592a-d9ee-4c7c-9a25-9e71d0a2a0d7',
//             TeamUuid: 'f42392d2-fd3e-4245-8168-81c7812ebc5a'
//           }
//         ]
//       }
//     }
//   }
// ]
