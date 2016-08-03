var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')
var stuff = require('./views/data')

var index = require('./routes/index')

var PORT = 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', index.get)

app.get('/getUser', function (req, res) {
  stuff.getUser()
    .then(function (profiles) {
      res.render('profiles', {profiles:profiles })
    })
    .catch(function (err) {
      res.status(500).send('SOMETHING BAD HAPPENED')
    })
})

// app.get('/assignments', function(req,res) {
//   DB.trashBaby()
//     .then(function (wombles) {
//       res.render('wombles', {wombles: wombles})
//     })
//     .catch(function (err) {
//       res.status(500).send('SOMETHING BAD HAPPENED')
//     })
// })

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
