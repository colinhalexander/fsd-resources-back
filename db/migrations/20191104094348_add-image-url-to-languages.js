
exports.up = function(knex) {
  return knex.schema.table('languages', (t) => {
    t.string('image_url')
  })
};

exports.down = function(knex) {
  
};
