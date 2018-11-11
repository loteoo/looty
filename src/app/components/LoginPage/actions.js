import {Http} from '../../utils.js'


export const lens = (state, nestedState) => ({
  ...state,
  loginPage: nestedState
})

export const SetValue = (state, key, ev) => lens(state, {
  ...state.loginPage,
  [key]: ev.target.value
})


export const SubmitForm = (state, ev) => {
  ev.preventDefault();
  return [
    lens(state, {
      ...state.loginPage,
      submitted: true,
    }),
    Http.fetch({
      url: `/_design/users/_view/by_username?startkey=["${state.loginPage.username}","${state.loginPage.password}"]&endkey=["${state.loginPage.username}","${state.loginPage.password}"]`,
      action: ReceiveUser
    })
  ]
}


// Places the CouchDB login response in the state
export const ReceiveUser = (state, response) => (
  response.rows.length > 0
    ? {
      ...state,
      user: response.rows[0].value._id,
      path: '/account',
      users: {
        ...state.users,
        [response.rows[0].value._id]: response.rows[0].value
      }
    }
    : state
)


