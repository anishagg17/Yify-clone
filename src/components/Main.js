import React, { useEffect, useState } from "react"
import Axios from "axios"
import styled from "styled-components"
import Paginatior from "./Pagination"
import Loader from "./Loader"
import MovieList from "./MovieList"

const Body = styled.div`
  background-color: #1d1d1d;
  min-height: 100vh;
`

export default () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const pageSize = 8

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await Axios.get("https://yts.mx/api/v2/list_movies.json")
        //   console.log("res", res.data.data)
        setMovies(res.data.data.movies)
        setTotalPages((res.data.data.movies.length + pageSize - 1) / pageSize)
        setLoading(false)
      }
      fetchData()
    } catch (error) {
      setLoading(false)
    }
  }, [])

  if (loading)
    return (
      <Body>
        <Loader />
      </Body>
    )

  const moviesToDisplay = movies.slice((page - 1) * pageSize, page * pageSize)

  return (
    <Body>
      <Paginatior
        totalPages={totalPages}
        page={page}
        setPage={i => setPage(i)}
      />
      <MovieList movies={moviesToDisplay} />
    </Body>
  )
}
