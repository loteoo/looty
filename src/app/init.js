
import {Navigate} from './actions.js'


import {listingPage} from './components/ListingPage/init.js'
import {itemPage} from './components/NewItemPage/init.js'
import {newItemPage} from './components/NewItemPage/init.js'


// Initial state of the app
export const init = Navigate({
  path: '/',

  listingPage,
  itemPage,
  newItemPage,

  // Cache
  items: {}

}, window.location.hash.substring(1))