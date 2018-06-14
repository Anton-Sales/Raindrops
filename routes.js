const express = require('express')
const functions = require('./functions')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')  
})

router.get('/test', (req, res) => {
  res.render('test')  
})

router.post('/api', (req, res) => {
  let name = req.body.name 
  let obj = functions.proccessRequest(name)
  res.json(obj)
})

module.exports = router
