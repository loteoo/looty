import {h} from 'hyperapp'

import './style.css'

// Import local actions
import {SetValue, SubmitForm} from './actions'


export const ItemPage = ({item, user}) => (
  <div className="item-page" key="item-page">
  
    <a href={item.shop_id ? `/#/shops/${item.shop_id}` : `/#/users/${item.user_id}`}>See seller</a>

    <p>Item name: <b>{item.title}</b></p>
    
    <p>{item.user_id === user._id ? 'You own this item!' : 'This item is not yours'}</p>
    
  </div>
)

