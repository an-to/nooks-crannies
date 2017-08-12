import React from 'react'
import {connect} from 'react-redux'


export default function Book ({book}) {
  return (
    <div className='book'>
      <p className='title'>{book.title}</p>
      <p className='author'><i>by</i> {book.first_name} {book.last_name}</p>
      <p className='genre'>{book.genre}</p>
    </div>
  )
}
