import React from "react"
import { css } from "@emotion/core"

import logo from "../images/logo.png"

const imgSize = css`
  width: 70px;
  margin-bottom: 0;
  max-height: 3.75rem !important;
`

const toggle = () => {
  const menu = document.getElementById("burger")
  const className = menu.getAttribute("class")
  if (className === "navbar-menu") {
    menu.className = "navbar-menu is-active"
  } else {
    menu.className = "navbar-menu"
  }
}

const Nav = () => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a class="navbar-item">
        <img css={imgSize} src={logo} />
      </a>
      <a
        role="button"
        onClick={toggle}
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="burger"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="burger" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="#">
          About
        </a>
        <a className="navbar-item" href="#">
          Services
        </a>
      </div>
    </div>
  </nav>
)

export default Nav
