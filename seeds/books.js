exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([{
          id: 1,
          title: 'Solaris',
          author_id: 'Stanislaw Lem',
          genre: 'Science Fiction'
        },
        {
          id: 2,
          title: 'Every Day is for the Thief',
          author_id: 'Teju Cole',
          genre: 'Novel'
        },
        {
          id: 3,
          title: 'Ru',
          author_id: 'Kim Thuy',
          genre: 'Novel'
        },
        {
          id: 4,
          title: 'Little Women',
          author_id: 'Louisa May Alcott',
          genre: 'Children'
        },
        {
          id: 5,
          title: 'Speak, Memory',
          author_id: 'Vladimir Nabokov',
          genre: 'Contemporary'
        },
        {
          id: 6,
          title: 'The Master and the Margarita',
          author_id: 'Mikhail Bulgakov',
          genre: 'Satire'
        }
      ]);
    });
};
