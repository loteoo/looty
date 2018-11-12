import {h} from 'hyperapp'

import './style.css'

// Import local actions
import {SetValue, SubmitForm, OnMount} from './actions'


export const ItemPage = ({item}) => (
  <div class="item-page" key="item-page" onmount={OnMount}>
  
    <div class="container">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{new Date(item.date).toDateString()}</p>

      <img src={item.image} alt={item.title} />

      <div class="images">
        {item.images.map(url => <img src={url} alt={item.title} />)}
      </div>

      <a href={item.url} target="_blank">View on kijiji</a>
      
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
    
  </div>
)

