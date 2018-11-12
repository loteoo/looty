
import {Http} from '../../utils.js'

export const lens = (state, nestedState) => ({
  ...state,
  itemPage: nestedState
})


export const SetValue = (state, key, ev) => lens(state, {
  ...state.itemPage,
  [key]: ev.target.value
})

export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state, null, 2));
  return lens(state, {
    ...state.itemPage,
    submitted: true
  })
}

export const OnMount = (state, ev) => {
  if (!state.items[state.path.split('/')[2]] && !state.itemPage.fetching) {
    return [
      state,
      Http.fetch({
        url: '/' + state.path.split('/')[2],
        action: ReceiveItem
      })
    ]
  }
  return state
}


// Places the CouchDB response in the state
export const ReceiveItem = (state, response) => ({
  ...state,
  itemPage: {
    ...state.itemPage,
    fetching: false,
    loaded: true
  },
  items: {
    ...state.items,
    [response._id]: response
  }
})
