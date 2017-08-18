exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function() {
      // Inserts seed entries
      return knex('authors').insert([{
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
          first_name: 'E L',
          last_name: 'James'
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
        },
        {
          id: 7,
          first_name: 'Oscar',
          last_name: 'Wilde'
        },
        {
          id: 8,
          first_name: 'Kim',
          last_name: 'Thúy'
        },
        {
          id: 9,
          first_name: 'Trevor',
          last_name: 'Noah'
        },
        {
          id: 10,
          last_name: 'Han',
          first_name: 'Suyin'
        },
        {
          id: 11,
          first_name: 'Azar',
          last_name: 'Nafisi'
        },
        {
          id: 12,
          first_name: 'Chimamanda Ngonzi',
          last_name: 'Adichie'
        },
        {
          id: 13,
          first_name: 'Lynley',
          last_name: 'Dodd'
        },
        {
          id: 14,
          first_name: 'Dr',
          last_name: 'Seuss'
        },
        {
          id: 15,
          first_name: 'George R. R.',
          last_name: 'Martin'
        },
        {
          id: 16,
          first_name: 'Patricia',
          last_name: 'Highsmith'
        },
        {
          id: 17,
          first_name: 'Agatha',
          last_name: 'Christie'
        },
        {
          id: 18,
          first_name: 'Maureen',
          last_name: 'Wheeler',
          first_name: 'Tony',
          last_name: 'Wheeler'
        },
        {
          id: 19,
          last_name: 'Lee',
          first_name: 'Kuan Yu'
        },
        {
          id: 20,
          first_name: 'Jamie',
          last_name: 'Oliver'
        },
        {
          id: 21,
          first_name: 'Plato',
          last_name: ''
        },
        {
          id: 22,
          first_name: 'Agatha',
          last_name: 'Christie'
        },
        {
          id: 23,
          first_name: 'Agatha',
          last_name: 'Christie'
        },
        {
          id: 24,
          first_name: 'Agatha',
          last_name: 'Christie'
        }
      ]);
    });
};


// {
//   id: ,
//   first_name: '',
//   last_name: ''
// }
