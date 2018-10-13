
export const scope = (state, nestedState) => ({
  ...state,
  itemForm: nestedState
})

export const SetValue = (state, key, ev) => scope(state, {
  ...state.itemForm,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.itemForm, null, 2));
  return scope(state, {
    ...state.itemForm,
    submitted: true
  })
}
