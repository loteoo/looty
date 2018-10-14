
export const scope = (state, nestedState) => ({
  ...state,
  accountPage: nestedState
})



export const SetValue = (state, key, ev) => scope(state, {
  ...state.accountPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  // alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.accountPage, null, 2));
  return scope(state, {
    ...state.accountPage,
    submitted: true
  })
}
