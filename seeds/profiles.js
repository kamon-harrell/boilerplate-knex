
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profiles').insert({user_id: 99901, user_name: 'Ambitious Aardvark', user_email:'aardvark@example.org' }),
        knex('profiles').insert({user_id: 99902, user_name: 'Bamboozled Baboon', user_email:'baboon@example.org' }),
        knex('profiles').insert({user_id: 99903, user_name: 'Curious Capybara', user_email:'capybara@example.org' })
      ]);
    });
};
