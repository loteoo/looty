
export const scope = (state, nestedState) => ({
  ...state,
  shopPage: {
    ...state.shopPage,
    itemForm: nestedState
  }
})

export const SetValue = (state, key, ev) => scope(state, {
  ...state.shopPage.itemForm,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.itemForm, null, 2));
  return scope(state, {
    ...state.shopPage.itemForm,
    submitted: true
  })
}
