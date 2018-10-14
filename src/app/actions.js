// ==================
// Global actions 
// ==================


import {Http} from './utils.js'

import {receiveShops} from './components/AccountPage/actions.js'


export const Navigate = (prevState, path) => {

  // Create our new state
  const state = {
    ...prevState,
    path
  }

  // Trigger stuff from navigations
  if (state.path === '/account' && !state.accountPage.shopsLoaded &&  !state.accountPage.shopsFetching) {
    return [
      state,
      Http.fetch({
        url: `/_design/shops/_view/by_user_id?startkey="${state.user._id}"&endkey="${state.user._id}"`,
        action: receiveShops
      })
    ]
  }

  return state
}

