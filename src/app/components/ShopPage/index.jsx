import {h} from 'hyperapp'

import './style.css'

// Import local actions
import {Up, Down} from './actions'

import {ItemForm} from './ItemForm'


export const ShopPage = ({itemForm, count}) => (
  <div className="shop-page" key="shop-page">
    <p>Component with namespaced state within the global state</p>
    <h2>{count}</h2>
    <button onclick={[Down]}>-</button>
    <button onclick={[Up]}>+</button>
    
    <ItemForm {...itemForm} />
  </div>
)

/*
import {ShopPage} from './components/ShopPage'
<ShopPage {...state.shopPage} />
*/
