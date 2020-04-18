import React, { useEffect } from "react"
import MovieCard from "./MovieCard"
import styled from "styled-components"

const Flex = styled.div`
  margin-top: 2rem;
  display: flex;
  box-siezing: border-box;
  padding: 0.42rem 3rem;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  z-index: 8;
  width: 100%;
  background: #1d1d1d;
  :focus {
    border: none;
  }
`

export default ({ movies }) => {
  console.log("movies", movies)
  return (
    <Flex>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </Flex>
  )
}
