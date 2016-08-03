var development = require('./knexfile').development
var knex = require('knex')(development)

function getUser () {
   return knex('users')
    .join('profiles', 'users.id', '=', 'profiles.user_id')
    .select('users.name', 'profiles.user_name')
}

module.exports = {
  getUser:getUser
}
