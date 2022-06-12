const express = require('express')
const isAuth = require('../middleware/isAuth')
const mainrouter = express.Router()


  mainrouter.get('/', (req, res) => {
    res.send({ message: 'welcome to adoptme '})
  })

  module.exports = mainrouter
