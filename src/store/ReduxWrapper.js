import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "."

const Store = () => createStore(rootReducer)

export default ({ children }) => <Provider store={Store()}>{children}</Provider>
