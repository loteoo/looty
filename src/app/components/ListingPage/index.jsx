import {h} from 'hyperapp'

import './style.css'


// Import local actions
import {SetSearch, SubmitSearch, OnMount, OnMapMount} from './actions'

import {NiceInput} from '../common/NiceInput'


export const ListingPage = ({items, submitted, search, currentQuery, fetching, loaded}) => (
  <div class="listing-page" key="listing-page" onmount={OnMount}>

    <div class="map" onmount={OnMapMount}></div>

    <form class="search-form" key="search-form" method="post" onsubmit={SubmitSearch}>
      <div class="floating">
        <input
          name="search"
          value={search}
          oninput={SetSearch}
        />
        <button type="submit">Submit</button>
      </div>
    </form>

    <div class="bottom">
    
      <div class="listing">
        {items.map(item => <Item item={item} />)}
      </div>

      

    </div>

  </div>
)

const Item = ({item}) => (
  <a href={`/#/items/${item._id}`} class="item" key={item._id}>
    <img src={item.image} alt={item.title} />
    <div class="info">
      <h4 class="title">{item.title}</h4>
      <div class="description">{item.description}</div>
    </div>
  </a>
)

/*
import {ListingPage} from './components/ListingPage'
<ListingPage />
*/