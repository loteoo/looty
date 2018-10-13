// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

import {Navigate} from './actions'

// Import components
import {ListingPage} from './components/ListingPage'
import {ShopPage} from './components/ShopPage'

// Root view
export const view = state => (
  <div className="app">
    <header>
      <div className="container">
        <nav className="top">
          <a onclick={[Navigate, '/']}>Looty</a>
          <a onclick={[Navigate, '/profile']}>Account</a>
          <a onclick={[Navigate, '/shop']}>Sell</a>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">

        {state.path === '/' ? <ListingPage {...state.listingPage} /> : null}

        {state.path.startsWith('/shop') ? <ShopPage {...state.shopPage} /> : null}
        

      </div>
    </main>
    <footer>
      <div className="container">
        <h4>State: </h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </footer>
  </div>
)
