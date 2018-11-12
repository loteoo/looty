
import {Http} from '../../utils.js'
import { addListener } from 'cluster';


export const lens = (state, nestedState) => ({
  ...state,
  listingPage: nestedState
})


// Sets the new item input value in the state
export const SetSearch = (state, ev) => lens(state, {
  ...state.listingPage,
  search: ev.target.value
})

export const SubmitSearch = (state, ev) => {
  ev.preventDefault();
  // alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.listingPage, null, 2));
  return lens(state, {
    ...state.listingPage,
    submitted: true
  })
}


export const OnMount = (state, ev) => {
  if (!state.listingPage.loaded && !state.listingPage.fetching) {
    return [
      state,
      Http.fetch({
        url: '/_design/all_items/_view/all_items',
        action: ReceiveItems
      })
    ]
  }
  return state
}


export const OnMapMount = (state, ev) => {
  
  const nextState = {
    ...state,
    map: new google.maps.Map(ev.target, {
      gestureHandling: 'greedy',
      center: {
        lat: 45.5260261,
        lng: -73.5775953
      },
      zoom: 12
    })
  }

  nextState.markers =  Object.keys(state.items).map(itemId => {
    let item = state.items[itemId]
    let marker = new google.maps.Marker({
      title: item.title,
      position: {
        lat: item.attributes.location.latitude,
        lng: item.attributes.location.longitude
      },
      icon: item.image,
      map: nextState.map
    })

    marker.addListener('click', () => {
      window.location.hash = '/items/' + item._id
    })

    return marker

  })

  console.log(nextState.markers);
  

  return nextState
}



// Places the CouchDB response in the state
export const ReceiveItems = (state, response) => ({
  ...state,
  listingPage: {
    ...state.listingPage,
    currentQuery: state.listingPage.search,
    search: '',
    fetching: false,
    loaded: true,
    listing: response.rows.map(item => item.value._id)
  },
  items: response.rows.reduce((cache, item) => ({...cache, [item.value._id]: item.value}), state.items)
})
