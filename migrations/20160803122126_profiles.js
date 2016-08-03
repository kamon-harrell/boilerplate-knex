
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function(table){
    table.increments('user_id').primary()
    table.string('user_name')
    table.string('user_email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
