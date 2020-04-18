import styled from "styled-components"
import React from "react"

const Flex = styled.div`
  display: flex;
  box-siezing: border-box;
  padding: 0.42rem 2rem;
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: center;
  color: ${props => (props.color ? props.color : "#919191")};
  font-size: 0.85em;
  font-weight: 700;

  z-index: 8;
  background: #1d1d1d;
  :focus {
    border: none;
  }
`

export default function Footer() {
  return (
    <div>
      <Flex>
        YTS © 2011 - 2020 - Blog - DMCA - API - RSS - Contact - Browse Movies -
        Requests - Login
      </Flex>
      <Flex>EZTV - YTS VPN</Flex>
      <Flex>
        By using this site you agree to and accept our User Agreement, which can
        be read here.
      </Flex>
    </div>
  )
}
