import React from 'react'
import {connect} from 'react-redux'


function BooksFound ({books}) {
console.log(books);
  return (
    <div className='book'>
      Search results:
      <ul>
      {
      books.map((book, k) =>
      {
        return (<li>{book.title}</li>)
      })}
            </ul>
    </div>
  )
}


function mapStateToProps (state) {
  return {
    books: state.searchResult
  }
}

export default connect(mapStateToProps)(BooksFound)
