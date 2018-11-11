
import {Http} from '../../utils.js'


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
        url: '/_design/items/_view/items',
        action: ReceiveItems
      })
    ]
  }
  return state
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
