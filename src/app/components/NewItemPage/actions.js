
export const scope = (state, nestedState) => ({
  ...state,
  newItemPage: nestedState
})

export const SetValue = (state, key, ev) => scope(state, {
  ...state.newItemPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.newItemPage, null, 2));
  return scope(state, {
    ...state.newItemPage,
    submitted: true
  })
}
