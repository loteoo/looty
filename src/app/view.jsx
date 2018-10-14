// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

import {Navigate} from './actions'

// Import components
import {ListingPage} from './components/ListingPage'
import {ShopPage} from './components/ShopPage'
import {LoginPage} from './components/LoginPage'

// Root view
export const view = state => (
  <div className="app">
    <header>
      <div className="container">
        <nav className="top">
          <a onclick={[Navigate, '/']}>Looty</a>
          <a onclick={[Navigate, '/profile']}>Account</a>
          <a onclick={[Navigate, state.user ? '/shops' : '/login']}>Sell</a>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">

        {state.path === '/' ? <ListingPage {...state.listingPage} /> : null}

        {state.path.startsWith('/shops') ? <ShopPage {...state.shopPage} /> : null}

        {state.path === '/login' ? <LoginPage {...state.loginPage} /> : null}

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
