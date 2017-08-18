const getBooks = (db) => {
  return db('books')
    .join('authors', 'authors.id', '=', 'books.author_id')
    .join('genres', 'genres.id', '=', 'books.genre_id')
    .select('*')
}

const singleBook = (id, db) => {
  return db('books')
    .join('authors', 'authors.id', '=', 'books.author_id')
    .join('genres', 'genres.id', '=', 'books.genre_id')
    .select('*')
}

module.exports = {
  getBooks,
  singleBook
}
