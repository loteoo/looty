
import {location} from '@hyperapp/router'

import {getData, postData} from './utils'

// Global actions for the app
export const actions = {

  // Router actions
  location: location.actions,

  // Set or replace first-level props
  set: fragment => fragment,

  // Called at startup
  init: () => (state, actions) => {
    // Subscribe to the router
    window.unsubscribeRouter = location.subscribe(window.main.location)

    actions.loadItems()
  },

  // Fetching status
  setIsFetching: isFetching => ({isFetching}),

  // Loads items
  loadItems: () => (state, actions) => {
    actions.setIsFetching(true)
    getData(`/todos/_design/recentItems/_view/id`)
      .then(items => {
        actions.setIsFetching(false)
        actions.setItems(items.rows)
      })
  },


  // Sets the item list (replaces)
  setItems: items => state => ({
    itemsIds: items.map(item => item.id),
    itemCache: items.reduce((cache, item) => ({...cache, [item.id]: item.value}), state.itemCache || {})
  }),


  // Indexed nested setter
  setItem: ({id, item}) => state => ({
    itemCache: {
      ...state.itemCache,
      [id]: item
    }
  }),


  // Fetch item by ID from api then update state
  fetchItem: id => (state, actions) => {
    getData(`/todos/${id}`)
      .then(item => actions.setItem({id, item}))
  }

}
