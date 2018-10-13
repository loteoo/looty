// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

// Import actions
import {setSearch} from './actions'

// Import components
import {SearchForm} from './components/SearchForm'

import {Listing} from './components/Listing'
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
        <SearchForm {...state.searchForm} />
      </div>
    </header>
    <main>
      <div className="container">
        <Listing items={state.items} />
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
