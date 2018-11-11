
export const lens = (state, nestedState) => ({
  ...state,
  newItemPage: nestedState
})

export const SetValue = (state, key, ev) => lens(state, {
  ...state.newItemPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.newItemPage, null, 2));
  return lens(state, {
    ...state.newItemPage,
    submitted: true
  })
}
