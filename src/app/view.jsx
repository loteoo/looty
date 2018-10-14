// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

import {Navigate} from './actions'

// Import components
import {ListingPage} from './components/ListingPage'
import {ShopPage} from './components/ShopPage'
import {LoginPage} from './components/LoginPage'
import {AccountPage} from './components/AccountPage'

// Root view
export const view = state => (
  <div className="app">
    <header>
      <div className="container">
        <nav className="top">
          <a onclick={[Navigate, '/']}>Looty</a>
          <a onclick={[Navigate, state.user ? '/account' : '/login']}>Account</a>
          <a onclick={[Navigate, state.user ? '/shops' : '/login']}>Sell</a>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">

        {state.path === '/' ? <ListingPage items={state.listingPage.listing.map(id => state.items[id])} {...state.listingPage} /> : null}

        {state.path === '/login' ? <LoginPage {...state.loginPage} /> : null}

        {state.path === '/account' ? <AccountPage user={state.user} shops={state.accountPage.userShops.map(id => state.shops[id])} {...state.accountPage} /> : null}

        {/* {state.path ==='/shops' ? <BrowseShops shops={...state.shops} /> : null} */}
        
        {state.path.startsWith('/shops/') ? <ShopPage shop={state.shops[state.path.split('/')[2]]} /> : null}

        {state.path.startsWith('/items/') ? <ItemPage item={state.items[state.path.split('/')[2]]} /> : null}

        {state.path === '/sell' ? <SellPage {...state.sellPage} /> : null}

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
