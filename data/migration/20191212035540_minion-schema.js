exports.up = function(knex) {
  return knex.schema.createTable("minions", tbl => {
    tbl.increments();
    tbl
      .string("name")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("minions");
};
