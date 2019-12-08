import React, { useState } from "react"
import Navbar from "./navbar"
import Hamburger from "./hamburger"
import Sidebar from "./sidebar"
// import { Wrapper, Overlay } from "./header"
import { css } from "@emotion/core"
import { container } from "../../../data/styles"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isSidebarOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ isSidebarOn: !this.state.isSidebarOn })
  }

  render() {
    const Wrapper = css`
      background: transparent;
      width: 100%;
    `

    const overlay = css`
      position: fixed;
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100%;
      display: none;
      transition: 1s;
      ${this.state.isSidebarOn &&
        `display: block;
         z-index: 4;
      `}
    `
    const hamburgerStyle = css`
      @media (min-width: 480px) {
        display: none;
      }
    `
    return (
      <header css={container}>
        <div css={overlay} onClick={this.handleClick}></div>
        <Navbar />
        <div css={hamburgerStyle} onClick={this.handleClick}>
          <Hamburger status={this.state.isSidebarOn} />
        </div>
        <Sidebar status={this.state.isSidebarOn} />
      </header>
    )
  }
}

export default Header
