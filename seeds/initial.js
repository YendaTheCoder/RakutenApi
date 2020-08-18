
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table').del()
    .then(function () {
      // Inserts seed entries
      return knex('table').insert(
        {like: 0, dislike: 0}
      );
    });
};
