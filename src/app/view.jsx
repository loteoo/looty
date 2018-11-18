// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

// Import components
import {ListingPage} from './components/ListingPage'
import {ItemPage} from './components/ItemPage'
import {NewItemPage} from './components/NewItemPage'

// Root view
export const view = state => (
  <div class="app">
    <ListingPage items={state.listingPage.listing.map(id => state.items[id])} {...state.listingPage} />
    {state.path.startsWith('/items/') ? <ItemPage item={state.items[state.path.split('/')[2]] || {}} /> : null}
    {state.path === '/sell' ? <NewItemPage {...state.newItemPage} /> : null}
  </div>
)
