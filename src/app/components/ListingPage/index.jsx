import {h} from 'hyperapp'

import './style.css'

import {SearchForm} from './SearchForm'

export const ListingPage = ({items, searchForm}) => (
  <div className="ListingPage" key="ListingPage">

    <SearchForm {...searchForm} />

    <div className="grid">
      {items.map(item => <Item item={item} />)}
    </div>
  </div>
)

const Item = ({item}) => (
  <div className="item" key={item._id}>
    {item.title}
  </div>
)

/*
import {ListingPage} from './components/ListingPage'
<ListingPage />
*/