exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([{
          id: 1,
          genre: ''
        },
        {
          id: 2,
          genre: ''
        },
        {
          id: 3,
          genre: ''
        },
        {
          id: 4,
          genre: ''
        },
        {
          id: 5,
          genre: ''
        },
        {
          id: 6,
          genre: ''
        }
      ]);
    });
};
