import React from "react"
import SearchBar from "./SearchBar"
import styled from "styled-components"
import { Link as _Link } from "gatsby"

const Flex = styled.div`
  display: flex;
  box-siezing: border-box;
  padding: 0.42rem 3rem;
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: center;

  z-index: 8;
  background: #1d1d1d;
  :focus {
    border: none;
  }
`

const Link = styled(_Link)`
  font-size: 0.85em;
  color: ${props => (props.color ? props.color : "#919191")};
  font-weight: 700;
  text-decoration: none;
  margin-left: 1.2rem;
`

export default function Navbar() {
  return (
    <Flex justify="space-between">
      <img
        src="https://yts.mx/assets/images/website/logo-YTS.svg"
        alt="YIFY"
        style={{ width: "10rem" }}
      />
      <Flex>
        <SearchBar placeholder="Quick Search" />
        <Link to="/">Home</Link>
        <Link to="/" color="#6AC045">
          4K
        </Link>
        <Link to="/"> Browse Movies </Link>
        <Link to="/" color="white">
          Login
        </Link>
        <Link to="/" color="white">
          |
        </Link>
        <Link to="/" color="white">
          Register
        </Link>
      </Flex>
    </Flex>
  )
}
