const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getColors,
    addEvent,
    getTypeVisual
}

function getColors (testConn) {
  const conn = testConn || connection
  return conn('colors').select()
}

function addEvent (userEvent, testConn) {
  const conn = testConn || connection
  return conn('events')
    .insert(userEvent)
}

function getTypeVisual(type, testConn) {
  const conn = testConn || connection
  return conn('type_visual')
    .where('name', type)
}
