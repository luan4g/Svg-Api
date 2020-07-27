exports.up = function (knex) {
  return knex.schema.createTable("svgs", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("image").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("svgs");
};
