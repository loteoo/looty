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
export const receiveUser = (state, response) => (
  response.rows.length > 0
    ? {
      ...state,
      path: '/shops',
      user: response.rows[0].value
    }
    : state
)



export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  return [scope(state, {
    ...state.loginPage,
    submitted: true,
  }),
    Http.fetch({
      url: `/_design/users/_view/by_username?startkey=["${state.loginPage.username}","${state.loginPage.password}"]&endkey=["${state.loginPage.username}","${state.loginPage.password}"]`,
      action: receiveUser
    })
  ]
}
// /_design/shops/_view/by_user_id?startkey="898b4c3d4d2cb94bc0aabc8e2a011bf5"&endkey="898b4c3d4d2cb94bc0aabc8e2a011bf5"