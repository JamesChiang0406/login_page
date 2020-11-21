const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
const Users = require('./models/user')
const user = require('./models/user')
const { use } = require('../restaurant_list/routes/modules/search')

const app = express()
const port = 3000

// template engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

// setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
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

// Express listening
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

/*{ "email": user_email, "password": user_password } */