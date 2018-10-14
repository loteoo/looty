import {h} from 'hyperapp'

import './style.css'

import {AccountForm} from './AccountForm'

import {Navigate} from '../../actions'


export const AccountPage = ({user, shops, accountForm}) => (
  <div className="account-page" key="account-page" method="post" >
  
    <AccountForm {...accountForm} />

    <p>My shops</p>
    {shops.map(shop => <a onclick={[Navigate, `/shops/${shop._id}`]}>{shop.title}</a>)}

    <button type="submit" pill>Submit</button>
  </div>
)
