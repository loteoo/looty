// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

// Import actions
import {SetSearch, SubmitSearch, OnMount, OnMapMount} from './actions'

// Import components
import {ItemPage} from './components/ItemPage'
import {NewItemPage} from './components/NewItemPage'

// Root view
export const view = state => (
  <div class="app" onmount={OnMount}>

    <div class="map" onmount={OnMapMount}></div>

    <form class="search-form" key="search-form" method="post" onsubmit={SubmitSearch}>
      <div class="floating">
        <input
          name="search"
          value={state.search}
          oninput={SetSearch}
        />
        <button type="submit">Submit</button>
      </div>
    </form>

    <div class="bottom">

      {state.path.startsWith('/items/') ? <ItemPage item={state.items[state.path.split('/')[2]] || {}} /> : null}
      
      {state.path === '/sell' ? <NewItemPage {...state.newItemPage} /> : null}

      <div class="listing">
        {state.listing.map(id => <Item item={state.items[id]} />)}
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
