exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function() {
      // Inserts seed entries
      return knex('genres').insert([{
          id: 1,
          genre: 'Science Fiction'
        },
        {
          id: 2,
          genre: 'Novel'
        },
        {
          id: 3,
          genre: 'Provocative Romance'
        },
        {
          id: 4,
          genre: 'Children'
        },
        {
          id: 5,
          genre: 'Contemporary'
        },
        {
          id: 6,
          genre: 'Satire'
        }
      ]);
    });
};
