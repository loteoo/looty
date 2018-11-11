
import {Http} from '../../utils.js'

export const lens = (state, nestedState) => ({
  ...state,
  accountPage: nestedState
})



export const SetValue = (state, key, ev) => lens(state, {
  ...state.accountPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  // alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.accountPage, null, 2));
  return lens(state, {
    ...state.accountPage,
    submitted: true
  })
}


export const OnMount = (state, ev) => {
  if (!state.accountPage.shopsLoaded && !state.accountPage.shopsFetching) {
    return [
      state,
      Http.fetch({
        url: `/_design/shops/_view/by_user_id?startkey="${state.user._id}"&endkey="${state.user._id}"`,
        action: ReceiveUserShops
      })
    ]
  }
  return state
}


// Places the CouchDB response in the state
export const ReceiveUserShops = (state, response) => ({
  ...state,
  accountPage: {
    shopsFetching: false,
    shopsLoaded: true,
    userShops: response.rows.map(shop => shop.value._id)
  },
  shops: response.rows.reduce((cache, shop) => ({...cache, [shop.value._id]: shop.value}), state.shops)
})


