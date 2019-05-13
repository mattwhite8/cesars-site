import React from "react"
import Nav from "./nav"
import { css } from "@emotion/core"

import "./style.scss"
import logo from "../images/logo_gold.png"

const imgSize = css`
  max-width: 512px;
  max-height: 512px;
  margin: 0 auto;
`

const Hero = () => (
  <section class="hero is-dark is-bold is-fullheight">
    <div className="hero-head">
      <Nav />
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure className="image">
          <img css={imgSize} src={logo} alt="logo" />
        </figure>
        <h1 class="title">Business Name</h1>
        <h2 class="subtitle">Slogan</h2>
      </div>
    </div>
  </section>
)

export default Hero
