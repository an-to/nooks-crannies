import React from 'react'
import {connect} from 'react-redux'
import Book from './Book'

function Books({books}) {
  return (
    <div className='booklist'>
      <p>Hello!!</p>
      {books.map((book, k) => {
        return (<Book key={k} book={book} />)
      })}
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state);
  return {books: state.books}
}

export default connect(mapStateToProps)(Books)
