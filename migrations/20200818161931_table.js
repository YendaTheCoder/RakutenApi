
exports.up = function(knex) {
  return knex.schema.createTable("jokes", (table) => {
    table.integer("joke_ID");
    table.text("joke");
    table.integer("like");
    table.integer("dislike");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("jokes");
};
