import {Http} from '../../utils.js'

export const scope = (state, nestedState) => ({
  ...state,
  loginPage: nestedState
})

export const SetValue = (state, key, ev) => scope(state, {
  ...state.loginPage,
  [key]: ev.target.value
})


// Places the CouchDB login response in the state
export const receiveUser = (state, response) => ({
  ...state,
  user: response.rows.length > 0 ? response.rows[0].value : null
})



export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  alert('Submitted!\nForm state: \n\n' + JSON.stringify(state.loginPage, null, 2));
  return [scope(state, {
    ...state.loginPage,
    submitted: true
  }),
    Http.fetch({
      url: `/_design/users/_view/by-username?startkey=["${state.loginPage.username}","${state.loginPage.password}"]&endkey=["${state.loginPage.username}","${state.loginPage.password}"]`,
      action: receiveUser
    })
  ]
}
