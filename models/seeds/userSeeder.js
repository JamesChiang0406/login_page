const User = require('../user')
const data = require('../../users.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 1; i <= data.users.length; i++) {
    User.create({
      firstName: data.users[i - 1].firstName,
      email: data.users[i - 1].email,
      password: data.users[i - 1].password
    })
  }
  console.log('done!')
})