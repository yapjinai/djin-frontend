const crossfade = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CROSSFADE':
      return action.crossfade
    default:
      return state
  }
}

export default crossfade
