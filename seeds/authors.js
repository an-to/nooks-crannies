exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([{
          id: 1,
          first_name: 'Stanislaw',
          last_name: 'Lem'
        },
        {
          id: 2,
          first_name: 'Teju',
          last_name: 'Cole'
        },
        {
          id: 3,
          first_name: 'Kim',
          last_name: 'Thuy'
        },
        {
          id: 4,
          first_name: 'Louisa May',
          last_name: 'Alcott'
        },
        {
          id: 5,
          first_name: 'Vladimir',
          last_name: 'Nabokov'
        },
        {
          id: 6,
          first_name: 'Mikhail',
          last_name: 'Bulgakov'
        }
      ]);
    });
};
