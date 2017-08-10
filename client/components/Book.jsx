import React from 'react'
import {connect} from 'react-redux'

export default function Book ({book}) {
console.log(book);
  return (
    <div className='book'>
      <p>title:{book.title}</p>
      <p>author:{book.author}</p>
      <p>genre:{book.genre}</p>
    </div>
  )
}
