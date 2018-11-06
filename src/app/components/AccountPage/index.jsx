import {h} from 'hyperapp'

import './style.css'


import {Navigate} from '../../actions'

import {SetValue, SubmitForm, OnMount} from './actions'

import {NiceInput} from '../common/NiceInput'

export const AccountPage = ({user, shops, submitted, newUsername, shopsFetching, shopsLoaded}) => (
  <div className="account-page" key="account-page" method="post" onmount={OnMount}>
  
    <p>User: {user.username}</p>

    <form className="account-form" key="account-form" method="post" onsubmit={SubmitForm}>
      <h3>My account</h3>
      
      <NiceInput
        label="Username"
        name="newUsername"
        value={newUsername}
        oninput={[SetValue, 'newUsername']}
        hint="Optional hint"
      />

      {!submitted ? <button type="submit" pill>Submit</button> : <span>Submitted!</span>}
    </form>


    <p>My shops</p>
    {shops.map(shop => <a href={`/#/shops/${shop._id}`}>{shop.title}</a>)}

    <button type="submit" pill>Submit</button>
  </div>
)
