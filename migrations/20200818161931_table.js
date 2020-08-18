
exports.up = function(knex) {
  return knex.schema.createTable("table", (table) => {
    table.integer("like");
    table.integer("dislike");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("table");
};
