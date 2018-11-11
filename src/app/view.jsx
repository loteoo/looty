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
    <header>
      <div class="container">
        <nav class="top">
          <a href="/#/">Looty</a>
          <a href={state.user ? '/#/account' : '/#/login'}>Account</a>
          <a href={state.user ? '/#/sell' : '/#/login'}>Sell</a>
        </nav>
      </div>
    </header>
    <main>
      {state.path === '/' ? <ListingPage items={state.listingPage.listing.map(id => state.items[id])} {...state.listingPage} /> : null}
      {state.path.startsWith('/items/') ? <ItemPage item={state.items[state.path.split('/')[2]] || {}} user={state.users[state.user] || {}} /> : null}
      {state.path === '/sell' ? <NewItemPage {...state.newItemPage} /> : null}
    </main>
    <footer>
      <div class="container">
        <h4>State: </h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </footer>
  </div>
)
