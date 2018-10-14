
export const scope = (state, nestedState) => ({
  ...state,
  accountPage: nestedState
})




// Places the CouchDB response in the state
export const receiveShops = (state, response) => scope(state, {
  ...state.accountPage,
  shopsFetching: false,
  shopsLoaded: true,
  shops: response.rows.map(item => item.value)
})
