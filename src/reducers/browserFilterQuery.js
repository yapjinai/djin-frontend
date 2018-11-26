const browserFilterQuery = (state = '', action) => {
  switch (action.type) {
    case 'SET_BROWSER_FILTER_QUERY':
      return action.browserFilterQuery
    default:
      return state
  }
}

export default browserFilterQuery
