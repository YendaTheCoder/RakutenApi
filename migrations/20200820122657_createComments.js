
exports.up = function(knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("comment_ID");
    table.text("comment");
    table.integer("comment_joke_ID");
    table.foreign("comment_joke_ID").references("jokesForUserPosts.joke_ID");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("comment");
};
