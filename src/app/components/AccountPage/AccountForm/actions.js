
export const scope = (state, nestedState) => ({
  ...state,
  accountPage: {
    ...state.accountPage,
    accountForm: nestedState
  }
})


export const SetValue = (state, key, ev) => scope(state, {
  ...state.accountPage.accountForm,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  // alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.accountPage.accountForm, null, 2));
  return scope(state, {
    ...state.accountPage.accountForm,
    submitted: true
  })
}
