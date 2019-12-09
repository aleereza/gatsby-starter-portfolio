import React from "react"
import { css } from "@emotion/core"

const hamburgerStyle = css`
  @media (min-width: 480px) {
    display: none;
  }
`
const Hamburger = ({ status, toggle }) => (
  <div css={hamburgerStyle} onClick={toggle}>
    hamburger button {status}
  </div>
)

export default Hamburger
