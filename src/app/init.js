import {newItemPage} from './components/NewItemPage/init.js'
import {accountPage} from './components/AccountPage/init.js'
import {loginPage} from './components/LoginPage/init.js'
import {shopPage} from './components/ShopPage/init.js'
import {listingPage} from './components/ListingPage/init.js'
import {Navigate} from './actions.js'

// Initial state of the app
export const init = Navigate({
  path: '/',
  user: null,
  listingPage,
  shopPage,
  loginPage,
  accountPage,  
  newItemPage,

  // Cache
  items: {},
  shops: {},
  users: {}

}, window.location.hash.substring(1))