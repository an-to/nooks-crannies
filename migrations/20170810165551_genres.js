
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('genres', (table) => {
    table.increments('id')
    table.string('text')
  })
};

exports.down = function(knex, Promise) {

};
