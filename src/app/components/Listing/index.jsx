import {h} from 'hyperapp'

import './style.css'

export const Listing = ({items}) => (
  <div className="listing" key="listing">
    {items.map(item => <Item item={item} />)}
  </div>
)

const Item = ({item}) => (
  <div className="item" key={item._id}>
    {item.title}
  </div>
)

/*
import {Listing} from './components/Listing'
<Listing />
*/