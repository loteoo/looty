import {app} from 'hyperapp'
import {init} from './init'
import {view} from './view'

import {Navigate} from './actions'
import {enableOnMountDomEvent, LocationChanged} from './utils.js'
enableOnMountDomEvent()

// Initialize the app
app({
  init,
  view,
  subscriptions: state => {
    console.log(state)
    return [
      LocationChanged({action: Navigate})
    ]
  },
  container: document.body
})