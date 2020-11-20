const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

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

// Express listening
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})