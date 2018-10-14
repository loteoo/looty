import {h} from 'hyperapp'

import './style.css'

// Import local actions
import {SetValue, SubmitForm} from './actions'

import {NiceInput} from '../../common/NiceInput'

export const AccountForm = ({username, submitted}) => (
  <form className="account-form" key="account-form" method="post" onsubmit={SubmitForm}>
    <h3>My account</h3>
    
    <NiceInput
      label="Username"
      name="username"
      value={username}
      oninput={[SetValue, 'username']}
      hint="Optional hint"
    />

    {!submitted ? <button type="submit" pill>Submit</button> : <span>Submitted!</span>}
  </form>
)

/*
import {AccountForm} from './components/AccountForm'
<AccountForm {...state.accountForm} />
*/
