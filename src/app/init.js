import {accountPage} from './components/AccountPage/init.js'
import {loginPage} from './components/LoginPage/init.js'
import {shopPage} from './components/ShopPage/init.js'
import {listingPage} from './components/ListingPage/init.js'
import {Navigate} from './actions.js'

// Initial state of the app
export const init = Navigate({
  path: '/',
  user: {
    "_id": "898b4c3d4d2cb94bc0aabc8e2a011bf5",
    "_rev": "1-cc610b717f601ca10e1dbed8b53ff927",
    "type": "user",
    "username": "loteoo",
    "password": "test"
  },
  listingPage,
  shopPage,
  loginPage,
  accountPage,

  // Cache
  items: {},
  shops: {}

}, window.location.pathname)