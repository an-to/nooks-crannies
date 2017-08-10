
import {
  CHANGE_WAITING
} from './index'

export const changeWaiting = (isWaiting) => {
  return {
    type: CHANGE_WAITING,
    isWaiting: isWaiting
  }
}