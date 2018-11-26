const reverseSort = (state = false, action) => {
  switch (action.type) {
    case 'SET_REVERSE_SORT':
      return action.reverseSort
    default:
      return state
  }
}

export default reverseSort
