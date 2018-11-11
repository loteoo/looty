
export const lens = (state, nestedState) => ({
  ...state,
  shopPage: nestedState
})


export const SetValue = (state, key, ev) => lens(state, {
  ...state.shopPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state, null, 2));
  return lens(state, {
    ...state.shopPage,
    submitted: true
  })
}




export const OnMount = (state, ev) => {
  if (!state.shops[state.path.split('/')[2]]) {
    return [
      {
        ...state,
        shopPage: {
          ...state.shopPage,
          shopFetching: true
        }
      },
      Http.fetch({
        url: `/${state.path.split('/')[2]}`,
        action: ReceiveShop
      })
    ]
  }
  return state
}




// Places the CouchDB response in the state
export const ReceiveShop = (state, response) => ({
  ...state,
  shopPage: {
    ...state.shopPage,
    shopFetching: false
  },
  shops: {
    ...state.shops,
    [response._id]: response
  }
})

