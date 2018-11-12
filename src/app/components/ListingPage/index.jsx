import {h} from 'hyperapp'

import './style.css'


// Import local actions
import {SetSearch, SubmitSearch, OnMount, OnMapMount} from './actions'

import {NiceInput} from '../common/NiceInput'


export const ListingPage = ({items, submitted, search, currentQuery, fetching, loaded}) => (
  <div class="listing-page" key="listing-page" onmount={OnMount}>

    <div class="map" onmount={OnMapMount}>

    </div>

    <form class="search-form" key="search-form" method="post" onsubmit={SubmitSearch}>
      
      <input
        name="search"
        value={search}
        oninput={SetSearch}
      />
      
      <button type="submit" pill>Submit</button>

    </form>

    <div class="listing">
      {items.map(item => <Item item={item} />)}
    </div>
  </div>
)

const Item = ({item}) => (
  <div class="item" key={item._id}>
    <a href={`/#/items/${item._id}`}>{item.title}</a>
  </div>
)

/*
import {ListingPage} from './components/ListingPage'
<ListingPage />
*/