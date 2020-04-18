const initialState = {
  cart: localStorage.getItem("cart") || "",
}
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const addToCart = item => {
  // console.log("item", item)
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
  switch (type) {
    case ADD_TO_CART:
      if (state.cart.includes(item)) return state

      console.log("item to add ", item)
      const newCart = `${state.cart}/${item}`
      localStorage.setItem("cart", newCart)
      console.log("newCart", newCart)
      return { ...state, cart: newCart }

    case REMOVE_FROM_CART:
      console.log("item to remove ", item)
      const remCart = state.cart
        .split("/")
        .filter(it => it !== item)
        .join("/")
      localStorage.setItem("cart", remCart)

      return { ...state, cart: remCart }

    default:
      return state
  }
}
