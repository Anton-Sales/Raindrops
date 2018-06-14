const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getColors
}

function getColors (testConn) {
  const conn = testConn || connection
  return conn('colors').select()
}


