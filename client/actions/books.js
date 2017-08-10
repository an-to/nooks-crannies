import request from 'superagent'

import {
  RECEIVE_BOOKS
} from './index'

export const receiveBooks = (books) => {
  return {
    type: RECEIVE_BOOKS,
    books
  }
}

export function getBooks() {
  return (dispatch) => {
    request
      .get('/api/v1/books')
      .end((err, res) => {
        if (err) throw err

        let books = res.body
        dispatch(receiveBooks(books))
      })
  }
}