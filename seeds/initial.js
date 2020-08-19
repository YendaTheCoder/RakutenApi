// Don't need to seed db

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').del()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert(
        {joke_ID: "5432", joke: "knock, knock, hahaha", like: 1, dislike: 0}
      );
    });
};
