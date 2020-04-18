import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Year = styled.div`
  font-size: 0.85em;
  color: #919191;
  line-height: 1.42857143;
`
const Card = styled.div`
  color: #fff;
  //   width: 30%;
  //   height: 35vh;
  margin: 0 5rem 5rem 0;
  display: flex;
  flex-direction: column;
  //   width: 100%;
`

const Image = styled.img`
  height: 100%;
`
const Title = styled(Link)`
  color: #fff;
  font-size: 0.95em;
  color: #fff;
  font-weight: 700;
  display: block;
  transition: color 0.15s ease-in-out;
  -moz-transition: color 0.15s ease-in-out;
  -webkit-transition: color 0.15s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Arimo, Arial, Helvetica, lucida grande, sans-serif;
  letter-spacing: -0.03em;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5em;
  text-decoration: none;
`

export default ({
  movie: { title, slug, id, rating, year, runtime, genres, medium_cover_image },
}) => {
  //   const = movie
  //   console.log("title", props)
  return (
    <Card>
      <Image src={medium_cover_image} alt={title} />
      <Title to={`movie/${id}`}>{title}</Title>
      <Year>{year}</Year>
    </Card>
  )
}
