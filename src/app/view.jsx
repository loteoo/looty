// Bundle css for this view
import 'sanitize.css'
import './style.css'

// Import dependencies
import {h} from 'hyperapp'

import {Listing} from '../components/Listing'


// Root view
export const view = (state, actions) => (
  <main>
    <h1>loots</h1>
    <Listing items={state.itemsIds.map(id => state.itemCache[id])} />
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </main>
)
