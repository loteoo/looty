// ==================
// Global actions 
// ==================

import {Http} from './utils'

export const Navigate = (state, path) => ({
  ...state,
  path
})





// Sets the new item input value in the state
export const SetSearch = (state, ev) => ({
  ...state,
  search: ev.target.value
})

export const SubmitSearch = (state, ev) => {
  ev.preventDefault();
  // alert('Submitted!\nForm state: \n\n' + JSON.stringify(state, null, 2));
  return {
    ...state,
    submitted: true
  }
}


export const OnMount = (state, ev) => {
  if (!state.loaded && !state.fetching) {
    return [
      state,
      Http.fetch({
        url: '/_design/all_items/_view/all_items?limit=50',
        action: ReceiveItems
      })
    ]
  }
  return state
}


export const OnMapMount = (state, ev) => ({
  ...state,
  map: new google.maps.Map(ev.target, {
    gestureHandling: 'greedy',
    disableDefaultUI: true,
    center: {
      lat: 45.5260261,
      lng: -73.5775953
    },
    zoom: 12
  })
})



// Places the CouchDB response in the state
export const ReceiveItems = (state, response) => ({
  ...state,
  currentQuery: state.search,
  search: '',
  fetching: false,
  loaded: true,
  listing: response.rows.map(item => item.value._id),
  items: response.rows.reduce((items, item) => {

    let marker = new google.maps.Marker({
      title: item.value.title,
      position: {
        lat: item.value.attributes.location.latitude,
        lng: item.value.attributes.location.longitude
      },
      // icon: item.value.image,
      map: state.map ? state.map : null
    })

    marker.addListener('click', ev => {

      if (state.infowindow) {
        state.infowindow.close()
      }

      state.infowindow = new google.maps.InfoWindow({
        content: /*html*/`
          <a href="#/items/${item.value._id}" class="map-marker-info-window">
            <img src="${item.value.image}" alt="${item.value.title}">
            <div class="info">
              <h4>${item.value.title}</h4>
            </div>
          </a>
        `
      })

      state.infowindow.open(state.map, marker)

    })

    return {
      ...items,
      [item.value._id]: {
        ...item.value,
        marker
      }
    }
  }, state.items)
})



export const OnScroll = (state, ev) => ({
  ...state,
  mapOffset: ev.target.scrollTop < window.innerHeight / 2 ? ev.target.scrollTop / 2 : state.mapOffset,
  inputOffset: ev.target.scrollTop + 60 > window.innerHeight / 2
    ? 60
    : (-1 * ev.target.scrollTop) + (window.innerHeight / 2)
})