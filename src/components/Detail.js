import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { addToCart } from "../store/app"

const Image = styled.img`
  height: 100%;
  border: 5px solid #fff;
  vertical-align: middle;
  margin-right: 2rem;
`
const Body = styled.div`
  background-color: #1d1d1d;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  font-family: Arimo, Arial, Helvetica, lucida grande, sans-serif;
  letter-spacing: -0.03em;
`
const Title = styled.h1`
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  margin: 0;
  font-size: 2.5em;
  margin-bottom: 24px;
  line-height: 42px;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  -webkit-font-smoothing: antialiased;
`

const Flex = styled.div`
  display: flex;
  box-siezing: border-box;
  justify-content: ${props => props.justify && props.justify};

  * {
    margin-bottom: 0.8rem;
  }
`

const Genre = styled.h2`
  line-height: 24px;
  font-size: 1.25em;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  margin: 0;
`
const Quality = styled.span`
  background: rgba(27, 27, 35, 0.4) !important;
  padding: 5px 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  -webkit-border-radius: 4px;
  font-size: 0.8em;
  color: #fff;
  margin-left: 9px;
  transition: color 0.15s ease-in-out;
  -moz-transition: color 0.15s ease-in-out;
  -webkit-transition: color 0.15s ease-in-out;
  box-sizing: border-box;
`
const Syn = styled.div`
  width: 60%;

  h3 {
    // width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    font-size: 1.25em;
    font-weight: 700;
  }
  p,
  i {
    color: #919191;
    line-height: 24px;
    margin: 5px 0;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: Arimo, Arial, Helvetica, lucida grande, sans-serif;
    letter-spacing: -0.03em;
    font-size: 16px;
  }
`
const Rating = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 1.15em;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  font-family: Arimo, Arial, Helvetica, lucida grande, sans-serif;
  letter-spacing: -0.03em;
  line-height: 1.42857143;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  > * {
    margin-right: 1.4rem;
  }
`
const Available = styled.em`
  font-style: italic;
  box-sizing: border-box;
  font-size: 1.1em;
  margin: 1.4rem 0;
  -webkit-font-smoothing: antialiased;
  color: #fff;

  line-height: 1.42857143;

  -webkit-tap-highlight-color: transparent;

  box-sizing: border-box;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export const Download = styled.button`
  background: #6ac045;
  margin: 0px 0;
  width: 89%;
  position: static;
  font-size: 1.1em;
  color: #fff;
  border-radius: 3px;
  border: none;
  display: block;
  font-weight: 700;
  font-size: 1.1em;
  cursor: pointer;
  :focus {
    outline: none;
  }
  padding: 7px 0;
`
const Year = styled.h2`
  line-height: 24px;
  font-size: 1.25em;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

const Cast = styled.div`
  width: 30%;
  margin-left: 10px;
  > * {
    border-bottom: 1px solid #2f2f2f;
  }
  h3 {
    font-size: 1.25em;
    font-weight: 700;
    display: block;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    padding-bottom: 10px;
  }

  div {
    img {
      height: 40px;
      width: 40px;
      border-radius: 150px;
      -webkit-border-radius: 150px;
      -moz-border-radius: 150px;
      margin-right: 10px;
    }
    .actor {
      box-sizing: border-box;
      color: rgb(145, 145, 145);
      cursor: pointer;
      display: inline;
      font-family: Arimo, Arial, Helvetica, "lucida grande", sans-serif;
      font-size: 13.68px;
      font-weight: 700;
    }
    .role {
      box-sizing: border-box;
      color: rgb(255, 255, 255);
      display: table-cell;
      font-family: Arimo, Arial, Helvetica, "lucida grande", sans-serif;
      font-size: 14.4px;
      letter-spacing: -0.48px;
    }
  }
`

const Detail = ({
  movie: {
    title,
    description_full,
    slug,
    id,
    rating,
    year,
    cast,
    runtime,
    genres,
    medium_cover_image,
    date_uploaded,
  },
  cart,
  dispatch,
}) => {
  return (
    <Body key={id}>
      <Flex>
        <div style={{ height: "100%" }}>
          <Image src={medium_cover_image} alt={title} />

          <Download onClick={() => dispatch(addToCart(title))}>
            Download
          </Download>
        </div>
        <div style={{ height: "100%" }}>
          <Title>{title}</Title> <Year>{year}</Year>
          <Genre>{genres && genres.join(" / ")}</Genre>
          <Available>
            <span>Available in</span>
            <Quality>720p</Quality>
          </Available>
          <Rating>
            <img
              src="https://yts.mx/assets/images/website/logo-imdb.svg"
              alt="IMDb"
            />
            <span>{rating}</span>
            <span className="hidden-xs icon-star" />
          </Rating>
        </div>
      </Flex>
      <Flex justify="space-between">
        <Syn>
          <h3>Synopsis</h3>
          <p>{description_full}</p>
          <i>Uploaded at : {date_uploaded}</i>
        </Syn>

        {cast && (
          <Cast>
            <h3>Cast</h3>
            {cast.map(({ name, character_name, url_small_image }) => (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-between",
                }}
              >
                <img src={url_small_image} alt={name} />
                <div className="actor">{`${name} `}</div>
                <span style={{ marginLeft: "5px" }} className="role">
                  {"  as"} {character_name}
                </span>
              </div>
            ))}
          </Cast>
        )}
      </Flex>
    </Body>
  )
}

const mapStateToProps = state => {
  return { cart: state.app.cart }
}

export default connect(mapStateToProps, null)(Detail)
