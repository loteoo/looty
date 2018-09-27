import {h} from 'hyperapp'

import './style.css'

export const Item = ({title, price}) => (
  <div class="item" key="item">
    <p>Title: {title}</p>
    <p>Price: {price}</p>
  </div>
)
