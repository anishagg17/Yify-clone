import React from "react"
import { Router } from "@reach/router"

const SomeSubPage = props => {
  return <div>Hi from SubPage with id: {props.id}</div>
}

export default () => {
  return (
    <Router>
      <SomeSubPage path="/movie/:id" />
    </Router>
  )
}
