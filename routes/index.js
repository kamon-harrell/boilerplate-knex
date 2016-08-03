var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)


function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function profiles(req, res) {
  var userId = req.params
  knex('users')
    .join('profiles', 'user_id', '=', 'users.id')
    .select()
    .then(function (data) {
      for(var i = 0; i < data.length; i++) {
        if (data[i].user_id == userId.id) {
          res.render('profiles', {profiles: data[i]})
        }
      }
    })
    .catch(function(err) {
      res.status(500).send('THUS IS A PA TA TO DATA BASE ' + err.message)
    })
}

module.exports = {
  get: get,
  profiles: profiles
}
