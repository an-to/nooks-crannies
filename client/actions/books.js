import {RECEIVE_BOOKS} from './index'

export const receiveBooks = (books) => {
  return {
    type: RECEIVE_BOOKS,
    books
  }
}