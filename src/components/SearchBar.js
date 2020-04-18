import React from "react"
import styled from "styled-components"

const Bar = styled.input`
  background: #1d1d1d;
  font-weight: 700;
  border: 2px solid #333;
  border-radius: 20px;
  padding: 4px 30px;
  font-size: 0.85em;
  color: #919191;
  :focus {
    outline: none;
  }
`

export default function SearchBar() {
  return (
    <div>
      <Bar placeholder="Quick Search" />
    </div>
  )
}
