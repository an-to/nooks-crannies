import React from 'react'
import {connect} from 'react-redux'


function BooksFound({books}) {
  return (
    <div className='book'>

      {books.map((book, k) => {
        return (
          <div className='Result'>
            <h2>Search Result:</h2>
            <ul>
              <li>{book.title}</li>
              <li>{book.first_name}{book.last_name}</li>
              <li>{book.genre}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}


function mapStateToProps (state) {
  return {
    books: state.searchResult
  }
}

export default connect(mapStateToProps)(BooksFound)
