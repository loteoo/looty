
export const scope = (state, nestedState) => ({
  ...state,
  shopPage: nestedState
})


export const SetValue = (state, key, ev) => scope(state, {
  ...state.shopPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state, null, 2));
  return scope(state, {
    ...state.shopPage,
    submitted: true
  })
}
