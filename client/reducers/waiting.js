export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_STATE:
      return action.waiting
    default:
      return state
  }
}