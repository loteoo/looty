// ==================
// Global actions 
// ==================


// Sets the new item input value in the state
export const setSearch = (state, ev) => ({
  ...state,
  search: ev.target.value
})
