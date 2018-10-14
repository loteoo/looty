// ==================
// Global actions 
// ==================


import {Http} from './utils.js'


export const Navigate = (prevState, path) => {

  history.pushState(null, null, path);

  // Create our new state
  const state = {
    ...prevState,
    path
  }

  // Trigger stuff from navigations

  // Loads items listing if necessary
  if (state.path === '/' && !state.listingPage.loaded &&  !state.listingPage.fetching) {
    return [
      state,
      Http.fetch({
        url: '/_design/items/_view/items',
        action: receiveItems
      })
    ]
  }

  // Loads items listing if necessary
  if (state.path.startsWith('/shops/') && !state.shops[state.path.split('/')[2]]) {
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
        action: receiveShop
      })
    ]
  }
  
  // Loads the user's shops
  if (state.path === '/account' && !state.accountPage.shopsLoaded &&  !state.accountPage.shopsFetching) {
    return [
      state,
      Http.fetch({
        url: `/_design/shops/_view/by_user_id?startkey="${state.user._id}"&endkey="${state.user._id}"`,
        action: receiveUserShops
      })
    ]
  }

  return state
}





// Places the CouchDB login response in the state
export const receiveUser = (state, response) => (
  response.rows.length > 0
    ? {
      ...state,
      path: '/account',
      user: response.rows[0].value
    }
    : state
)



// Places the CouchDB response in the state
export const receiveItems = (state, response) => ({
  ...state,
  listingPage: {
    ...state.listingPage,
    currentQuery: state.listingPage.search,
    search: '',
    fetching: false,
    loaded: true,
    listing: response.rows.map(item => item.value._id)
  },
  items: response.rows.reduce((cache, item) => ({...cache, [item.value._id]: item.value}), state.items)
})



// Places the CouchDB response in the state
export const receiveUserShops = (state, response) => ({
  ...state,
  accountPage: {
    shopsFetching: false,
    shopsLoaded: true,
    userShops: response.rows.map(shop => shop.value._id)
  },
  shops: response.rows.reduce((cache, shop) => ({...cache, [shop.value._id]: shop.value}), state.shops)
})



// Places the CouchDB response in the state
export const receiveShop = (state, response) => ({
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

