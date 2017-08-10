exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([{
          id: 1,
          title: 'Solaris',
          author: 'Stanislaw Lem',
          genre: ''
        },
        {
          id: 2,
          title: 'Open City',
          author: 'Teju Cole',
          genre: ''
        },
        {
          id: 3,
          title: 'Ru',
          author: 'Kim Thuy',
          genre: ''
        },
        {
          id: 4,
          title: 'Little Women',
          author: 'Louisa May Alcott',
          genre: ''
        },
        {
          id: 5,
          title: 'Lolita',
          author: 'Vladimir Nabokov',
          genre: ''
        },
        {
          id: 6,
          title: 'The Master and the Margarita',
          author: 'Mikhail Bulgakov',
          genre: ''
        }
      ]);
    });
};
