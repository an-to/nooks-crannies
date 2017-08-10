import {UPDATE_SEARCHRESULT} from '../actions/index'

export default function (state=[], action) {
  switch(action.type) {
    case UPDATE_SEARCHRESULT:
      return action.foundBooks

    default: return state
  }
}