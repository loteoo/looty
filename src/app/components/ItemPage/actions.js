
export const lens = (state, nestedState) => ({
  ...state,
  itemPage: nestedState
})


export const SetValue = (state, key, ev) => lens(state, {
  ...state.itemPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state, null, 2));
  return lens(state, {
    ...state.itemPage,
    submitted: true
  })
}
