import React from "react"
import ClipLoader from "react-spinners/ClipLoader"
import styled from "styled-components"

const Center = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 100vw;
  }
`
export default () => {
  return (
    <Center>
      <ClipLoader size={150} color={"#1976d2"} loading />
    </Center>
  )
}
