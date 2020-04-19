const initialState = {
  cart: "",
}
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item,
  }
}

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  item,
})

export default (state = initialState, { item, type }) => {
  const curState = { ...state }
  const cur = curState.cart
  switch (type) {
    case ADD_TO_CART:
      if (curState.cart.includes(item)) return curState

      const newCart = `${cur}/${item}`
      return { ...curState, cart: newCart }

    case REMOVE_FROM_CART:
      const remCart = cur
        .split("/")
        .filter(it => it !== item)
        .join("/")

      return { ...curState, cart: remCart }

    default:
      return curState
  }
}
