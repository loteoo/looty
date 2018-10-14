
export const scope = (state, nestedState) => ({
  ...state,
  listingPage: nestedState
})


// Sets the new item input value in the state
export const setSearch = (state, ev) => scope(state, {
  ...state.listingPage,
  search: ev.target.value
})

export const SubmitSearch = (state, ev) => {
  ev.preventDefault();
  // alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.listingPage, null, 2));
  return scope(state, {
    ...state.listingPage,
    submitted: true
  })
}
