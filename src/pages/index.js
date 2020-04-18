import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main from "../components/Main"
import ReduxWrapper from "../store/ReduxWrapper"
import "./style.css"

export default () => (
  <ReduxWrapper>
    <div style={{ height: "100%", background: "#1d1d1d" }}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  </ReduxWrapper>
)
