
export const scope = (state, nestedState) => ({
  ...state,
  shopPage: nestedState
})

export const Up = (state) => scope(state, {
  count: state.shopPage.count + 1
})

export const Down = (state) => scope(state, {
  count: state.shopPage.count - 1
})