import {searchForm} from './SearchForm/init.js'

export const listingPage = {
  searchForm,
  currentQuery: null,
  isFetching: true,
  itemsLoaded: false,
  items: []
}