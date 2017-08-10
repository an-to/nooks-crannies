exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('books', (table) => {
    table.increments('id')
    table.string('title')
    table.integer('author_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
