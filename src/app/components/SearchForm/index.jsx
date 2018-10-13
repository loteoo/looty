import {h} from 'hyperapp'

// Import local actions
import {SetValue, SubmitForm} from './actions'

import './style.css'

export const SearchForm = ({firstName, lastName, submitted}) => (
  <form className="search-form" key="search-form" method="post" onsubmit={SubmitForm}>
    <input type="text" id="firstName" name="firstName" placeholder="First name" value={firstName} oninput={[SetValue, 'firstName']} required />
    {!submitted ? <button type="submit" pill>Submit</button> : <span>Submitted!</span>}
  </form>
)

/*
import {SearchForm} from './components/SearchForm'
<SearchForm {...state.searchForm} />
*/
