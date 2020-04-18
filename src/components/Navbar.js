import React, { useState } from "react"
import SearchBar from "./SearchBar"
import Cart from "./Cart"
import styled from "styled-components"
import { Link as _Link } from "gatsby"
import Modal from "@material-ui/core/Modal"

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
const Button = styled.button`
  font-size: 0.85em;
  color: ${props => (props.color ? props.color : "#919191")};
  font-weight: 700;
  text-decoration: none;
  margin-left: 1.2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  :focus {
    outline: none;
  }
`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Flex justify="space-between">
      <Link to="/">
        <img
          src="https://yts.mx/assets/images/website/logo-YTS.svg"
          alt="YIFY"
          style={{ width: "10rem" }}
        />
      </Link>
      <Flex>
        <SearchBar placeholder="Quick Search" />
        <Link to="/">Home</Link>
        <Link to="/" color="#6AC045">
          4K
        </Link>
        <div>
          <Button type="button" onClick={handleOpen}>
            Cart
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Cart />
          </Modal>
        </div>
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
