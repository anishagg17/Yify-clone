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
  const curState = { ...state }
  switch (type) {
    case ADD_TO_CART:
      if (curState.cart.includes(item)) return curState

      console.log("item to add ", item)

      const newCart = `${localStorage.getItem("cart")}/${item}`
      localStorage.setItem("cart", newCart)
      console.log("newCart", newCart)
      return { ...curState, cart: newCart }

    case REMOVE_FROM_CART:
      console.log("item to remove ", item)
      const remCart = localStorage
        .getItem("cart")
        .split("/")
        .filter(it => it !== item)
        .join("/")
      localStorage.setItem("cart", remCart)
      console.log("remCart", remCart)

      return { ...curState, cart: remCart }

    default:
      return curState
  }
}
