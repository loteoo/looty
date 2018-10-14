import {Http} from '../../utils.js'
import {receiveUser} from '../../actions.js'

export const scope = (state, nestedState) => ({
  ...state,
  loginPage: nestedState
})

export const SetValue = (state, key, ev) => scope(state, {
  ...state.loginPage,
  [key]: ev.target.value
})


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