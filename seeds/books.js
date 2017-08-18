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
        },
        {
          id: 7,
          title: 'The Importance of Being Earnest',
          author_id: 7,
          genre_id:7
        },
        {
          id: 8,
          title: 'Ru',
          author_id: 8,
          genre_id: 8
        },
        {
          id: 9,
          title: 'Born a Crime',
          author_id: 9,
          genre_id: 9
        },
        {
          id: 10,
          title: 'Two Loves',
          author_id: 10,
          genre_id: 10
        },
        {
          id: 11,
          title: 'Reading Lolita in Tehran',
          author_id: 11,
          genre_id: 11
        },
        {
          id: 12,
          title: 'Half of a Yellow Sun',
          author_id: 12,
          genre_id: 12
        },
        {
          id: 13,
          title: "Hairy Maclary From Donaldson's Dairy",
          author_id: 13,
          genre_id: 13
        },
        {
          id: 14,
          title: 'Green Eggs and Ham and Other Stories',
          author_id: 14,
          genre_id: 14
        },
        {
          id: 15,
          title: 'A Song of Ice and Fire',
          author_id: 15,
          genre_id: 15
        },
        {
          id: 16,
          title: 'The Talented Mr Ripley',
          author_id: 16,
          genre_id: 16
        },
        {
          id: 17,
          title: 'Third Girl',
          author_id: 17,
          genre_id: 17
        },
        {
          id: 18,
          title: 'Lonely Planet: Across Asia on the Cheap',
          author_id: 18,
          genre_id: 18
        },
        {
          id: 19,
          title: 'The Singapore Story',
          author_id: 19,
          genre_id: 19
        },
        {
          id: 20,
          title: 'The Naked Chef',
          author_id: 20,
          genre_id: 20
        },
        {
          id: 21,
          title: 'The Republic',
          author_id: 21,
          genre_id: 21
        },
        {
          id: 22,
          title: 'The Murder of Roger Ackroyd',
          author_id: 22,
          genre_id: 22
        },
        {
          id: 23,
          title: 'Seven Dials Mystery',
          author_id: 23,
          genre_id: 23
        },
        {
          id: 24,
          title: 'Murder on the Orient Express',
          author_id: 24,
          genre_id: 24
        }
      ]);
    });
};


// {
//   id: ,
//   title: '',
//   author_id: ,
//   genre_id:
// }
