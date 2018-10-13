import {searchForm} from './components/SearchForm/init.js'
import {receiveItems} from './actions.js'
import {Http} from './utils.js'
// Initial state of the app
export const init = [{
  searchForm,
  isFetching: true,
  itemsLoaded: false,
  items: []
},
  Http.fetch({
    url: '/_design/items/_view/items',
    action: receiveItems
  })
]
