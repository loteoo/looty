
import {Navigate} from './actions.js'

import {itemPage} from './components/ItemPage/init.js'
import {newItemPage} from './components/NewItemPage/init.js'


// Initial state of the app
export const init = Navigate({

  // Nav
  path: '/',

  // Gmap
  map: null,
  infowindow: null,

  // Listing
  search: '',
  submitted: false,
  currentQuery: null,
  fetching: false,
  loaded: false,
  listing: [],

  // Slices
  itemPage,
  newItemPage,

  // Cache
  items: {}

}, window.location.hash.substring(1))