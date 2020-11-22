const express = require('express')
const router = express()
const home = require('./modules/home')
const loginFunc = require('./modules/loginFunc')

router.use('/', home)
router.use('/login', loginFunc)

module.exports = router