import {h} from 'hyperapp'

// Import local actions
import {Up, Down} from './actions'

import './style.css'

export const ShopPage = ({count = count || 0}) => (
  <div className="shop-page" key="shop-page">
    <p>Component with namespaced state within the global state</p>
    <h2>{count}</h2>
    <button onclick={[Down]}>-</button>
    <button onclick={[Up]}>+</button>
  </div>
)

/*
import {ShopPage} from './components/ShopPage'
<ShopPage {...state.shopPage} />
*/
