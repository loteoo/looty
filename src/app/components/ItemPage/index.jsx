import {h} from 'hyperapp'

import './style.css'

// Import local actions
import {SetValue, SubmitForm, OnMount} from './actions'


export const ItemPage = ({item}) => (
  <div class="item-page" key="item-page" onmount={OnMount}>
  
    <div className="container">
      <p>Item name: <b>{item.title}</b></p>
      
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
    
  </div>
)

