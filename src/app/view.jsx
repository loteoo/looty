// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

// Import actions
import {setSearch} from './actions'

// Import components
import {SearchForm} from './components/SearchForm'

// Root view
export const view = state => (
  <div className="app">
    <header>
      <nav className="top">
        <a href="#">Looty</a>
        <a href="#">Account</a>
        <a href="#">Sell</a>
      </nav>
      <SearchForm {...state.searchForm} />
    </header>
    <main>
      <div className="container">
      
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
