
export const scope = (state, nestedState) => ({
  ...state,
  listingPage: nestedState
})



// Places the CouchDB response in the state
export const receiveItems = (state, response) => scope(state, {
  ...state.listingPage,
  isFetching: false,
  itemsLoaded: true,
  items: response.rows.map(item => item.value)
})

