import {h} from 'hyperapp'

// Import local actions
import {setSearch, SubmitSearch} from './actions'

import {NiceInput} from '../../common/NiceInput'

import './style.css'

export const SearchForm = ({search, submitted}) => (
  <form className="search-form" key="search-form" method="post" onsubmit={SubmitSearch}>
  
    <NiceInput
      label="Search"
      name="search"
      value={search}
      oninput={setSearch}
      hint="Optional hint"
    />

    {!submitted ? <button type="submit" pill>Submit</button> : <span>Submitted!</span>}
  </form>
)

/*
import {SearchForm} from './components/SearchForm'
<SearchForm {...state.searchForm} />
*/
