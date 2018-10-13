
export const scope = (state, nestedState) => ({
  ...state,
  searchForm: nestedState
})

export const SetValue = (state, key, ev) => scope(state, {
  ...state.searchForm,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.searchForm, null, 2));
  return scope(state, {
    ...state.searchForm,
    submitted: true
  })
}
