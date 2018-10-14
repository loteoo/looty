import {h} from 'hyperapp'

// Import local actions
import {SetValue, SubmitForm} from './actions'

import './style.css'

export const LoginPage = ({username, password, submitted}) => (
  <form className="login-page" key="login-page" method="post" onsubmit={SubmitForm}>
    <h3>Login</h3>
    {submitted ? <p>Try again</p> : null}
    <input type="text" id="username" name="username" placeholder="Username" value={username} oninput={[SetValue, 'username']} required />
    <input type="password" name="password" placeholder="Password" value={password} oninput={[SetValue, 'password']} required />
    <button type="submit" pill>Submit</button>
  </form>
)

/*
import {LoginPage} from './components/LoginPage'
<LoginPage {...state.loginPage} />
*/
