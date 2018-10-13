import {shopPage} from './components/ShopPage/init.js'
import {listingPage} from './components/ListingPage/init.js'
import {receiveItems} from './components/ListingPage/actions.js'
import {Http} from './utils.js'
// Initial state of the app
export const init = [{
  path: '/',
  shopPage,
  listingPage
},
  Http.fetch({
    url: '/_design/items/_view/items',
    action: receiveItems
  })
]
