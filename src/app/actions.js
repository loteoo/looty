// ==================
// Global actions 
// ==================


// Sets the new item input value in the state
export const setSearch = (state, ev) => ({
  ...state,
  search: ev.target.value
})

// Places the CouchDB response in the state
export const receiveItems = (state, response) => ({
  ...state,
  isFetching: false,
  itemsLoaded: true,
  items: response.rows.map(item => item.value)
})
