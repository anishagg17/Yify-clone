import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Axios from "axios"

import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import Footer from "../components/Footer"
import Detail from "../components/Detail"

const SomeSubPage = ({ id }) => {
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await Axios.get(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
        )
        console.log("res", res.data)
        setMovie(res.data.data.movie)
        setLoading(false)
      }
      fetchData()
    } catch (error) {
      setLoading(false)
    }
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Navbar />
      <Detail movie={movie} />
      <Footer />
    </>
  )
}

export default () => {
  return (
    <Router>
      <SomeSubPage path="/movie/:id" />
    </Router>
  )
}
