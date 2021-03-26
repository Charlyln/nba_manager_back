require('dotenv').config()
const Sequelize = require('sequelize')
const {
  DBNAME,
  DBPASS,
  DBUSER,
  DBDIALECT,
  DBHOST,
  DBTEST,
  NODE_ENV
} = process.env

if (process.env.DATABASE_URL) {
  module.exports = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  })
} else {
  module.exports = new Sequelize({
    host: DBHOST || 'localhost',
    username: DBUSER,
    password: DBPASS,
    database: NODE_ENV !== 'test' ? DBNAME : DBTEST,
    dialect: DBDIALECT,
    logging: false
  })
}
