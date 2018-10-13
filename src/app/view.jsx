// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

// Import components
import {ItemForm} from './components/ItemForm'

import {ListingPage} from './components/ListingPage'

// Root view
export const view = state => (
  <div className="app">
    <header>
      <div className="container">
        <nav className="top">
          <a href="#">Looty</a>
          <a href="#">Account</a>
          <a href="#">Sell</a>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">

        {state.path === '/' ? <ListingPage {...state.listingPage} /> : null}

        {state.path === '/shop/' ? <ListingPage items={state.items} /> : null}
        
        <ItemForm {...state.itemForm} />

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
