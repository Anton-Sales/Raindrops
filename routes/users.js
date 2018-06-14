const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
  // db.getUsers()
  //   .then(users => {
  //     res.render('index', {users: users})
  //   })
  //   .catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

router.post('/test', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = router
