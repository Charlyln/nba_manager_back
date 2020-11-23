const Team = require('../models/team.model')
const Player = require('../models/player.model')

const DataCreation = (uuid) => {
  return Promise.all([teamsPlayersCreation(uuid)])
}

const teamsPlayersCreation = async (uuid) => {
  await Team.create({
    name: 'Warriors',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/GSW_logo.svg',
    UserUuid: uuid
  })
  await Team.create({
    name: 'Lakers',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
    UserUuid: uuid
  }),
    // await Team.create({
    //   name: 'Clippers',
    //   logo: 'https://fr.global.nba.com/media/img/teams/00/logos/LAC_logo.svg',
    //   UserUuid: uuid
    // }),
    await Team.create({
      name: 'Heat',
      logo: 'https://fr.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
      UserUuid: uuid
    }),
    await Team.create({
      name: 'Celtics',
      logo: 'https://fr.global.nba.com/media/img/teams/00/logos/BOS_logo.svg',
      UserUuid: uuid
    }),
    await Team.create({
      name: 'Rockets',
      logo: 'https://fr.global.nba.com/media/img/teams/00/logos/HOU_logo.svg',
      UserUuid: uuid
    })
  await Team.create({
    name: 'Mavs',
    logo: 'https://fr.global.nba.com/media/img/teams/00/logos/DAL_logo.svg',
    UserUuid: uuid
  })
  const lakers = await Team.findOne({
    where: {
      name: 'Lakers',
      UserUuid: uuid
    }
  })
  await Player.create({
    firstName: 'Lebron',
    lastName: 'James',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
    TeamUuid: lakers.dataValues.uuid,
    UserUuid: uuid,
    value: 97,
    ptsBeg: 15,
    salary: 37000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 15,
    ptsMax: 35,
    rebMin: 5,
    rebMax: 15,
    pasMin: 5,
    pasMax: 15
  })
  await Player.create({
    firstName: 'Anthony',
    lastName: 'Davis',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254',
    TeamUuid: lakers.dataValues.uuid,
    UserUuid: uuid,
    value: 91,
    ptsMin: 15,
    ptsBeg: 15,
    salary: 27000000,
    contractLeft: 1,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMax: 35,
    rebMin: 5,
    rebMax: 15,
    pasMin: 5,
    pasMax: 15
  })
  await Player.create({
    firstName: 'Danny',
    lastName: 'Green',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png&w=350&h=254',
    TeamUuid: lakers.dataValues.uuid,
    UserUuid: uuid,
    value: 78,
    ptsBeg: 6,
    salary: 14000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 6,
    ptsMax: 18,
    rebMin: 5,
    rebMax: 15,
    pasMin: 5,
    pasMax: 15
  })
  await Player.create({
    firstName: 'Kentavious',
    lastName: 'Caldwell-pope',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581018.png&w=350&h=254',
    TeamUuid: lakers.dataValues.uuid,
    UserUuid: uuid,
    value: 77,
    ptsMin: 6,
    ptsBeg: 6,
    salary: 8000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMax: 18,
    rebMin: 5,
    rebMax: 15,
    pasMin: 5,
    pasMax: 15
  })
  await Player.create({
    firstName: 'JaVale',
    lastName: 'McGee',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3452.png&w=350&h=254',
    TeamUuid: lakers.dataValues.uuid,
    UserUuid: uuid,
    value: 77,
    ptsBeg: 6,
    salary: 4000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 6,
    ptsMax: 18,
    rebMin: 5,
    rebMax: 15,
    pasMin: 5,
    pasMax: 15
  })

  const warrios = await Team.findOne({
    where: {
      name: 'Warriors',
      UserUuid: uuid
    }
  })
  await Player.create({
    firstName: 'Stephen',
    lastName: 'Curry',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
    TeamUuid: warrios.dataValues.uuid,
    UserUuid: uuid,
    value: 96,
    ptsBeg: 15,
    salary: 40000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 9,
    ptsMin: 15,
    ptsMax: 50,
    rebMin: 5,
    rebMax: 12,
    pasMin: 9,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Klay',
    lastName: 'Thompson',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254',
    TeamUuid: warrios.dataValues.uuid,
    UserUuid: uuid,
    value: 91,
    ptsMin: 10,
    ptsBeg: 10,
    salary: 32000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 2,
    pasBeg: 2,
    ptsMax: 40,
    rebMin: 2,
    rebMax: 5,
    pasMin: 2,
    pasMax: 7
  })
  await Player.create({
    firstName: 'Andrew',
    lastName: 'Wiggins',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png&w=350&h=254',
    TeamUuid: warrios.dataValues.uuid,
    UserUuid: uuid,
    value: 85,
    ptsMin: 10,
    ptsBeg: 10,
    salary: 27000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 2,
    ptsMax: 28,
    rebMin: 5,
    rebMax: 12,
    pasMin: 2,
    pasMax: 5
  })
  await Player.create({
    firstName: 'Draymond',
    lastName: 'Green',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254',
    TeamUuid: warrios.dataValues.uuid,
    UserUuid: uuid,
    value: 87,
    ptsMin: 5,
    ptsBeg: 5,
    salary: 18000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 8,
    pasBeg: 7,
    ptsMax: 18,
    rebMin: 8,
    rebMax: 12,
    pasMin: 7,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Kevon',
    lastName: 'Looney',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png&w=350&h=254',
    TeamUuid: warrios.dataValues.uuid,
    UserUuid: uuid,
    value: 80,
    ptsBeg: 6,
    salary: 4000000,
    contractLeft: 1,
    age: 28,
    rebBeg: 8,
    pasBeg: 2,
    ptsMin: 6,
    ptsMax: 14,
    rebMin: 8,
    rebMax: 13,
    pasMin: 2,
    pasMax: 4
  })
  const rockets = await Team.findOne({
    where: {
      name: 'Rockets',
      UserUuid: uuid
    }
  })
  await Player.create({
    firstName: 'P.J.',
    lastName: 'Tucker',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png&w=350&h=254',
    TeamUuid: rockets.dataValues.uuid,
    UserUuid: uuid,
    value: 80,
    ptsBeg: 10,
    salary: 8000000,
    contractLeft: 1,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Robert',
    lastName: 'Covington',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490620.png&w=350&h=254',
    TeamUuid: rockets.dataValues.uuid,
    UserUuid: uuid,
    value: 81,
    ptsBeg: 10,
    salary: 11000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Eric',
    lastName: 'Gordon',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png&w=350&h=254',
    TeamUuid: rockets.dataValues.uuid,
    UserUuid: uuid,
    value: 83,
    ptsBeg: 10,
    salary: 14000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'James',
    lastName: 'Harden',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
    TeamUuid: rockets.dataValues.uuid,
    UserUuid: uuid,
    value: 90,
    ptsBeg: 20,
    salary: 38000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 20,
    ptsMax: 40,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Russell',
    lastName: 'Westbrook',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254',
    TeamUuid: rockets.dataValues.uuid,
    UserUuid: uuid,
    value: 90,
    ptsBeg: 20,
    salary: 38000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 20,
    ptsMax: 30,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  const mavs = await Team.findOne({
    where: {
      name: 'Mavs',
      UserUuid: uuid
    }
  })
  await Player.create({
    firstName: 'Luka',
    lastName: 'Doncic',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
    TeamUuid: mavs.dataValues.uuid,
    UserUuid: uuid,
    value: 93,
    ptsBeg: 20,
    salary: 7000000,
    contractLeft: 1,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 20,
    ptsMax: 40,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Kristaps',
    lastName: 'Porzingis',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png&w=350&h=254',
    TeamUuid: mavs.dataValues.uuid,
    UserUuid: uuid,
    value: 86,
    ptsBeg: 10,
    salary: 27000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 30,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Tim',
    lastName: 'Hardaway Jr.',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528210.png&w=350&h=254',
    TeamUuid: mavs.dataValues.uuid,
    UserUuid: uuid,
    value: 81,
    ptsBeg: 10,
    salary: 20000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Seth',
    lastName: 'Curry',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png&w=350&h=254',
    TeamUuid: mavs.dataValues.uuid,
    UserUuid: uuid,
    value: 79,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Dwight',
    lastName: 'Powell',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png&w=350&h=254',
    TeamUuid: mavs.dataValues.uuid,
    UserUuid: uuid,
    value: 76,
    ptsBeg: 10,
    salary: 10000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  // const clippers = await Team.findOne({
  //   where: {
  //     name: 'Clippers',
  //     UserUuid: uuid
  //   }
  // })
  // await Player.create({
  //   firstName: 'Kawhi',
  //   lastName: 'Leonard',
  //   photo:
  //     'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png&w=350&h=254',
  //   TeamUuid: clippers.dataValues.uuid,
  //   UserUuid: uuid,
  //   value: 96,
  //   ptsMin: 20,
  //   ptsMax: 40,
  //   rebMin: 5,
  //   rebMax: 12,
  //   pasMin: 5,
  //   pasMax: 12
  // })
  // await Player.create({
  //   firstName: 'Paul',
  //   lastName: 'George',
  //   photo:
  //     'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4251.png&w=350&h=254',
  //   TeamUuid: clippers.dataValues.uuid,
  //   UserUuid: uuid,
  //   value: 90,
  //   ptsMin: 20,
  //   ptsMax: 40,
  //   rebMin: 5,
  //   rebMax: 12,
  //   pasMin: 5,
  //   pasMax: 12
  // })
  // await Player.create({
  //   firstName: 'Lou',
  //   lastName: 'Williams',
  //   photo:
  //     'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2799.png&w=350&h=254',
  //   TeamUuid: clippers.dataValues.uuid,
  //   UserUuid: uuid,
  //   value: 82,
  //   ptsMin: 10,
  //   ptsMax: 20,
  //   rebMin: 5,
  //   rebMax: 12,
  //   pasMin: 5,
  //   pasMax: 12
  // })
  // await Player.create({
  //   firstName: 'Montrezl',
  //   lastName: 'Harrell',
  //   photo:
  //     'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991055.png&w=350&h=254',
  //   TeamUuid: clippers.dataValues.uuid,
  //   UserUuid: uuid,
  //   value: 82,
  //   ptsMin: 10,
  //   ptsMax: 20,
  //   rebMin: 5,
  //   rebMax: 12,
  //   pasMin: 5,
  //   pasMax: 12
  // })
  // await Player.create({
  //   firstName: 'Patrick',
  //   lastName: 'Beverley',
  //   photo:
  //     'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3964.png&w=350&h=254',
  //   TeamUuid: clippers.dataValues.uuid,
  //   UserUuid: uuid,
  //   value: 78,
  //   ptsMin: 5,
  //   ptsMax: 15,
  //   rebMin: 5,
  //   rebMax: 12,
  //   pasMin: 5,
  //   pasMax: 12
  // })
  const celtics = await Team.findOne({
    where: {
      name: 'Celtics',
      UserUuid: uuid
    }
  })
  await Player.create({
    firstName: 'Jayson',
    lastName: 'Tatum',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254',
    TeamUuid: celtics.dataValues.uuid,
    UserUuid: uuid,
    value: 91,
    ptsBeg: 20,
    salary: 7000000,
    contractLeft: 1,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 20,
    ptsMax: 30,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Kemba',
    lastName: 'Walker',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png&w=350&h=254',
    TeamUuid: celtics.dataValues.uuid,
    UserUuid: uuid,
    value: 89,
    ptsBeg: 20,
    salary: 32000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 20,
    ptsMax: 30,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Marcus',
    lastName: 'Smart',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png&w=350&h=254',
    TeamUuid: celtics.dataValues.uuid,
    UserUuid: uuid,
    value: 85,
    ptsBeg: 10,
    salary: 12000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Jaylen',
    lastName: 'Brown',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254',
    TeamUuid: celtics.dataValues.uuid,
    UserUuid: uuid,
    value: 87,
    ptsBeg: 20,
    salary: 6000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 20,
    ptsMax: 25,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Daniel',
    lastName: 'Theis',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png&w=350&h=254',
    TeamUuid: celtics.dataValues.uuid,
    UserUuid: uuid,
    value: 78,
    ptsBeg: 10,
    salary: 5000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  const heat = await Team.findOne({
    where: {
      name: 'Heat',
      UserUuid: uuid
    }
  })
  await Player.create({
    firstName: 'Duncan',
    lastName: 'Robinson',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3157465.png&w=350&h=254',
    TeamUuid: heat.dataValues.uuid,
    UserUuid: uuid,
    value: 77,
    ptsBeg: 10,
    salary: 1400000,
    contractLeft: 1,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Bam',
    lastName: 'Adebayo',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png&w=350&h=254',
    TeamUuid: heat.dataValues.uuid,
    UserUuid: uuid,
    value: 85,
    ptsBeg: 10,
    salary: 3400000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Jimmy',
    lastName: 'Butler',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254',
    TeamUuid: heat.dataValues.uuid,
    UserUuid: uuid,
    value: 91,
    ptsBeg: 15,
    salary: 32000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 15,
    ptsMax: 40,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Goran',
    lastName: 'Dragic',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png&w=350&h=254',
    TeamUuid: heat.dataValues.uuid,
    UserUuid: uuid,
    value: 85,
    ptsBeg: 15,
    salary: 19000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 15,
    ptsMax: 25,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })
  await Player.create({
    firstName: 'Jae',
    lastName: 'Crowder',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6581.png&w=350&h=254',
    TeamUuid: heat.dataValues.uuid,
    UserUuid: uuid,
    value: 80,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })

  // free agents

  await Player.create({
    firstName: 'Joe',
    lastName: 'Harris',
    photo:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528794.png&w=350&h=254',
    UserUuid: uuid,
    value: 80,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 0,
    age: 28,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 10,
    ptsMax: 20,
    rebMin: 5,
    rebMax: 12,
    pasMin: 5,
    pasMax: 12
  })

    // retirements

    await Player.create({
      firstName: 'Vince',
      lastName: 'Carter',
      photo:
        'https://www.basketball-reference.com/req/202011051/images/players/cartevi01.jpg',
      UserUuid: uuid,
      value: 80,
      ptsBeg: 10,
      salary: 7000000,
      contractLeft: 2,
      age: 43,
      rebBeg: 5,
      pasBeg: 5,
      ptsMin: 10,
      ptsMax: 20,
      rebMin: 5,
      rebMax: 12,
      pasMin: 5,
      pasMax: 12
    })

    await Player.create({
      firstName: 'Udonis', 
      lastName: 'Haslem',
      photo:
        'https://www.basketball-reference.com/req/202011051/images/players/hasleud01.jpg',
      UserUuid: uuid,
      value: 80,
      ptsBeg: 10,
      salary: 7000000,
      contractLeft: 2,
      age: 40,
      rebBeg: 5,
      pasBeg: 5,
      ptsMin: 10,
      ptsMax: 20,
      rebMin: 5,
      rebMax: 12,
      pasMin: 5,
      pasMax: 12
    })

    await Player.create({
      firstName: 'Pau', 
      lastName: 'Gasol',
      photo:
        'https://www.basketball-reference.com/req/202011051/images/players/gasolpa01.jpg',
      UserUuid: uuid,
      value: 80,
      ptsBeg: 10,
      salary: 7000000,
      contractLeft: 2,
      age: 40,
      rebBeg: 5,
      pasBeg: 5,
      ptsMin: 10,
      ptsMax: 20,
      rebMin: 5,
      rebMax: 12,
      pasMin: 5,
      pasMax: 12
    })

    await Player.create({
      firstName: 'Kyle',  
      lastName: 'Korver',
      photo:
        'https://www.basketball-reference.com/req/202011051/images/players/korveky01.jpg',
      UserUuid: uuid,
      value: 80,
      ptsBeg: 10,
      salary: 7000000,
      contractLeft: 2,
      age: 39,
      rebBeg: 5,
      pasBeg: 5,
      ptsMin: 10,
      ptsMax: 20,
      rebMin: 5,
      rebMax: 12,
      pasMin: 5,
      pasMax: 12
    })

  // prospects

  await Player.create({
    firstName: 'Isaac',
    lastName: 'Okoro',
    photo:
      'https://www.envergure.co/upload/cache/player_big/upload/player/image/200209143641-Isaac_Okoro.jpeg',
    UserUuid: uuid,
    value: 70,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 19,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 5,
    ptsMax: 15,
    rebMin: 5,
    rebMax: 8,
    pasMin: 5,
    pasMax: 8
  })
  await Player.create({
    firstName: 'Killian',
    lastName: 'Hayes',
    photo:
      'https://www.envergure.co/upload/cache/player_big/upload/player/image/190622184450-Killian_Hayes.jpeg',
    UserUuid: uuid,
    value: 70,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 19,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 5,
    ptsMax: 15,
    rebMin: 5,
    rebMax: 8,
    pasMin: 5,
    pasMax: 8
  })
  await Player.create({
    firstName: 'Deni',
    lastName: 'Avdija',
    photo:
      'https://www.envergure.co/upload/cache/player_big/upload/player/image/200517123125-Deni_Avdija.jpeg',
    UserUuid: uuid,
    value: 70,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 19,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 5,
    ptsMax: 15,
    rebMin: 5,
    rebMax: 8,
    pasMin: 5,
    pasMax: 8
  })

  await Player.create({
    firstName: 'Tyrese',
    lastName: 'Maxey',
    photo:
      'https://www.envergure.co/upload/cache/player_big/upload/player/image/200209143836-Tyrese_Maxey.jpeg',
    UserUuid: uuid,
    value: 70,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 19,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 5,
    ptsMax: 15,
    rebMin: 5,
    rebMax: 8,
    pasMin: 5,
    pasMax: 8
  })
  await Player.create({
    firstName: 'Lamelo',
    lastName: 'Ball',
    photo:
      'https://www.envergure.co/upload/cache/player_big/upload/player/image/200209143836-Tyrese_Maxey.jpeg',
    UserUuid: uuid,
    value: 70,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 19,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 5,
    ptsMax: 15,
    rebMin: 5,
    rebMax: 8,
    pasMin: 5,
    pasMax: 8
  })
  await Player.create({
    firstName: 'Anthony',
    lastName: 'Edwards',
    photo:
      'https://www.envergure.co/upload/cache/player_big/upload/player/image/200209015641-LaMelo_Ball.jpeg',
    UserUuid: uuid,
    value: 70,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 19,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 5,
    ptsMax: 15,
    rebMin: 5,
    rebMax: 8,
    pasMin: 5,
    pasMax: 8
  })
  await Player.create({
    firstName: 'James',
    lastName: 'Wiseman',
    photo:
      'https://www.envergure.co/upload/cache/player_big/upload/player/image/200319230912-James_Wiseman.jpeg',
    UserUuid: uuid,
    value: 70,
    ptsBeg: 10,
    salary: 7000000,
    contractLeft: 2,
    age: 19,
    rebBeg: 5,
    pasBeg: 5,
    ptsMin: 5,
    ptsMax: 15,
    rebMin: 5,
    rebMax: 8,
    pasMin: 5,
    pasMax: 8
  })
}

module.exports = DataCreation
