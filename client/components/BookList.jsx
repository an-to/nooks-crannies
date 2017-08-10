import React from 'react'
import Book from './Book'

function Books ({books}) {
  return (
    <div className='booklist'>
      {books.map((book) => {
        <Book book={book} />
      })}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Books)