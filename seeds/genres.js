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
          genre: 'General'
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
          genre: 'Memoir'
        },
        {
          id: 6,
          genre: 'Satire'
        },
        {
          id: 7,
          genre: 'Plays'
        },
        {
          id: 8,
          genre: 'Poems'
        },
        {
          id: 9,
          genre: 'Memoir'
        },
        {
          id: 10,
          genre: 'Romance'
        },
        {
          id: 11,
          genre: 'Memoir'
        },
        {
          id: 12,
          genre: 'General'
        },
        {
          id: 13,
          genre: 'Childrens'
        },
        {
          id: 14,
          genre: 'Childrens'
        },
        {
          id: 15,
          genre: 'Fantasy'
        },
        {
          id: 16,
          genre: 'Crime'
        },
        {
          id: 17,
          genre: 'Crime'
        },
        {
          id: 18,
          genre: 'Travel'
        },
        {
          id: 19,
          genre: 'World Affairs'
        },
        {
          id: 20,
          genre: 'Cooking'
        },
        {
          id: 21,
          genre: 'Philosophy'
        },
        {
          id: 22,
          genre: 'Crime'
        },
        {
          id: 23,
          genre: 'Crime'
        },
        {
          id: 24,
          genre: 'Crime'
        }
      ]);
    });
};

// {
//   id: ,
//   genre: ''
// }
