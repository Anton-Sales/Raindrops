const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')  
})

router.get('/test', (req, res) => {
  res.render('test')  
})

router.post('/test', (req, res) => {
  console.log(req.body)
  let obj = {name: 'Here is a raindrop', id: req.body.id}
  res.json(obj)
})

module.exports = router
