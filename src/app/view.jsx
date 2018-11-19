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

      
      {state.path === '/sell' ? <NewItemPage {...state.newItemPage} /> : null}

      <div class="listing">
        {state.listing.map(id => {
          
          const item = state.items[id]
          
          return state.path === `/items/${item._id}`
            ? <ItemPage item={item} />
            : (
              <a href={`/#/items/${item._id}`} class="item" key={item._id} id={`/items/${item._id}`}>
                <img src={item.image} alt={item.title} />
                <div class="info">
                  <h4 class="title">{item.title}</h4>
                  <div class="description">{item.description}</div>
                </div>
              </a>
            )
        })}
      </div>

    </div>



  </div>
)



