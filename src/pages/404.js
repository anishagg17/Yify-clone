import React from "react"
import { Center } from "../components/Loader"
import { Link } from "gatsby"
import styled from "styled-components"

const Flex = styled.div`
  display: block;
  box-siezing: border-box;
  span {
    margin-right: 3px;
  }
  a {
    margin-left: 3px;
    text-decoration: none !important;
  }
`

export default () => {
  return (
    <Center>
      <Flex>
        <span>Page Not Found </span>
        <Link to="/">Home</Link>
      </Flex>
    </Center>
  )
}
