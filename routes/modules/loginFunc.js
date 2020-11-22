const express = require('express')
const router = express()
const Users = require('../../models/users')

router.post('/', (req, res) => {
  const user_email = req.body.email
  const user_password = req.body.password
  Users.findOne({ "email": user_email, "password": user_password })
    .lean()
    .then(user => {
      if (user === null) {
        res.render('index', { errorMsg: "Username 或 Password 錯誤" })
      } else {
        res.render('welcome', { user })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router