export const scope = (state, nestedState) => ({
  ...state,
  listingPage: {
    ...state.listingPage,
    searchForm: nestedState
  }
})


// Sets the new item input value in the state
export const setSearch = (state, ev) => scope(state, {
  ...state.listingPage.searchForm,
  search: ev.target.value
})

export const SubmitSearch = (state, ev) => {
  ev.preventDefault();
  // alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.listingPage.searchForm, null, 2));
  return scope(state, {
    ...state.listingPage.searchForm,
    submitted: true
  })
}