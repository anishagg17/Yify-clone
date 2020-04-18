import React from "react"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  box-siezing: border-box;
  padding: 0.42rem 3rem;
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: center;

  background: #1d1d1d;
  :focus {
    border: none;
  }
`
const Option = styled.button`
  background-color: rgba(0, 0, 0, 0.08);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  font-weight: 700;
  color: ${props => (props.color ? props.color : "#fff")};
  background-color: transparent;
  padding: 10px 13px !important;
  display: block;
  margin-right: 0.4rem;
  :focus {
    border: none;
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`

export default ({ totalPages, page, setPage }) => {
  const arr = Array.from({ length: totalPages }, (x, i) => i + 1)

  return (
    <Flex>
      {arr.map(i => {
        const color = page === i ? "#6AC045" : "#fff"
        return (
          <Option key={i} color={color} onClick={e => setPage(i)}>
            {i}
          </Option>
        )
      })}
    </Flex>
  )
}
