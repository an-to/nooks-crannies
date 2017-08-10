exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function() {
      // Inserts seed entries
      return knex('books').insert([{
          id: 1,
          title: 'Solaris',
          author_id: 1,
          genre_id: 1
        },
        {
          id: 2,
          title: 'Every Day is for the Thief',
          author_id: 2,
          genre_id: 2
        },
        {
          id: 3,
          title: 'Fifty Shades of Grey',
          author_id: 3,
          genre_id: 3
        },
        {
          id: 4,
          title: 'Little Women',
          author_id: 4,
          genre_id: 4
        },
        {
          id: 5,
          title: 'Speak, Memory',
          author_id: 5,
          genre_id: 5
        },
        {
          id: 6,
          title: 'The Master and the Margarita',
          author_id: 6,
          genre_id: 6
        }
      ]);
    });
};
