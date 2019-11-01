
exports.up = function(knex) {
  return knex.schema.createTable('languages', (t) => {
    t.increments()
    t.string('name')
    t.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('languages')
};
