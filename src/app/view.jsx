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
  <div className="app">
    <header>
      <div className="container">
        <nav className="top">
          <a href="/#/">Looty</a>
          <a href={state.user ? '/#/account' : '/#/login'}>Account</a>
          <a href={state.user ? '/#/sell' : '/#/login'}>Sell</a>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">

        {state.path === '/login' ? <LoginPage {...state.loginPage} /> : null}

        {state.path === '/account' ? <AccountPage user={state.users[state.user] || {}} shops={state.accountPage.userShops.map(id => state.shops[id])} {...state.accountPage} /> : null}

        {state.path === '/' ? <ListingPage items={state.listingPage.listing.map(id => state.items[id])} {...state.listingPage} /> : null}

        {state.path.startsWith('/items/') ? <ItemPage item={state.items[state.path.split('/')[2]] || {}} user={state.users[state.user] || {}} /> : null}

        {/* {state.path ==='/shops' ? <BrowseShops shops={...state.shops} /> : null} */}

        {state.path.startsWith('/shops/') ? <ShopPage shop={state.shops[state.path.split('/')[2]] || {}} user={state.users[state.user] || {}} /> : null}


        {state.path === '/sell' ? <NewItemPage {...state.newItemPage} /> : null}

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
