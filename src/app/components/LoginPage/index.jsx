import {h} from 'hyperapp'

// Import local actions
import {SetValue, SubmitForm} from './actions'

import {NiceInput} from '../common/NiceInput'

import './style.css'

export const LoginPage = ({username, password, submitted}) => (
  <form className="login-page" key="login-page" method="post" onsubmit={SubmitForm}>
    <h3>Login</h3>
    {submitted ? <p>Try again</p> : null}

    <NiceInput
      label="Username"
      name="username"
      value={username}
      oninput={[SetValue, 'username']}
      hint="Optional hint"
    />

    <NiceInput
      label="Password"
      name="password"
      type="password"
      value={password}
      oninput={[SetValue, 'password']}
      hint="Optional hint"
    />
    
    <button type="submit" pill>Submit</button>
  </form>
)

/*
import {LoginPage} from './components/LoginPage'
<LoginPage {...state.loginPage} />
*/
