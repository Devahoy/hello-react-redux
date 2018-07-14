export default (state = 0, { type, score }) => {
  switch (type) {
    case 'INCREMENT':
      return state + score
    case 'DECREMENT':
      return state - score
    default:
      return state
  }
}