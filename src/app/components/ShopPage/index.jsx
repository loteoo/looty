import {h} from 'hyperapp'

import './style.css'

// Import local actions
import {SetValue, SubmitForm, OnMount} from './actions'


export const ShopPage = ({shop, user}) => (
  <div className="shop-page" key="shop-page" onmount={OnMount}>
  
    <p>Shop name: <b>{shop.title}</b></p>
    
    <p>{shop.user_id === user._id ? 'You own this shop!' : 'This shop is not yours'}</p>
    
  </div>
)

