import {h} from 'hyperapp'

import './style.css'


// Import local actions
import {SetSearch, SubmitSearch, OnMount} from './actions'

import {NiceInput} from '../common/NiceInput'


export const ListingPage = ({items, submitted, search, currentQuery, fetching, loaded}) => (
  <div className="ListingPage" key="ListingPage" onmount={OnMount}>

    <form className="search-form" key="search-form" method="post" onsubmit={SubmitSearch}>
      
      <NiceInput
        label="Search"
        name="search"
        value={search}
        oninput={SetSearch}
        hint="Optional hint"
      />

      {!submitted ? <button type="submit" pill>Submit</button> : <span>Submitted!</span>}
    </form>

    <div className="grid">
      {items.map(item => <Item item={item} />)}
    </div>
  </div>
)

const Item = ({item}) => (
  <div className="item" key={item._id}>
    <a href={`/#/items/${item._id}`}>{item.title}</a>
  </div>
)

/*
import {ListingPage} from './components/ListingPage'
<ListingPage />
*/