import {h} from 'hyperapp'

import './style.css'

import {Item} from '../Item'

export const Listing = ({items}) => (
  <div class="listing" key="listing">
    Items:
    {items.map(item => <Item {...item} />)}
  </div>
)
