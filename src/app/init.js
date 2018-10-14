import {accountPage} from './components/AccountPage/init.js'
import {loginPage} from './components/LoginPage/init.js'
import {shopPage} from './components/ShopPage/init.js'
import {listingPage} from './components/ListingPage/init.js'
import {receiveItems} from './components/ListingPage/actions.js'
import {Http} from './utils.js'
// Initial state of the app
export const init = [{
  path: '/',
  user: {
    "_id": "898b4c3d4d2cb94bc0aabc8e2a011bf5",
    "_rev": "1-cc610b717f601ca10e1dbed8b53ff927",
    "type": "user",
    "username": "loteoo",
    "password": "test"
  },
  shopPage,
  listingPage,
  loginPage,
  accountPage
},
  Http.fetch({
    url: '/_design/items/_view/items',
    action: receiveItems
  })
]
