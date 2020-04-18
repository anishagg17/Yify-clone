import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import { Download } from "./Detail"

const Year = styled.div`
  font-size: 0.85em;
  color: #919191;
  line-height: 1.42857143;
`
const HOver = styled(Link)`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  height: 90%;
  text-decoration: none;
  display: felx;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  // justify-content: center;
  width: 100%;
  cursor: pointer;
  > * {
    width: 100%;
    position: relative;
    margin: 0px 35%;
    // top: 50%;
    // left: 50%;
  }
`
const Card = styled.div`
  position: relative;
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
const Genre = styled.h2`
  line-height: 24px;
  font-size: 1.25em;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  padding: 0 auto;
`
const Download = styled.button`
  background: #6ac045;
  margin: 0px 50%;
  width: 100%;
  // position: static;
  font-size: 1.1em;
  color: #fff;
  border-radius: 3px;
  border: none;
  // display: block;
  font-weight: 700;
  font-size: 1.1em;
  padding: 7px;
`
export default ({
  movie: { title, slug, id, rating, year, runtime, genres, medium_cover_image },
}) => {
  //   const = movie
  //   console.log("title", props)
  const [isShown, setIsShown] = useState(false)

  return (
    <Card
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Image src={medium_cover_image} alt={title} />
      <Title to={`movie/${id}`}>{title}</Title>
      <Year>{year}</Year>
      {isShown && (
        <HOver to={`movie/${id}`}>
          <Genre>{`${rating} / 10`}</Genre>
          <div>
            {genres.map(g => (
              <Genre>{g}</Genre>
            ))}
          </div>
          <Download>View Details</Download>
        </HOver>
      )}
    </Card>
  )
}
