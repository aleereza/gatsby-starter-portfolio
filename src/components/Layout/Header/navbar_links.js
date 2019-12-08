import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { css } from "@emotion/core"
import { navbarLinks } from "../../../data/info"
import { Link } from "gatsby"

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  a {
    color: #6d6d6d;
    text-decoration: none;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: unset;
    }
  }

  @media (min-width: 480px) {
    flex-direction: row;
    a {
      margin-bottom: 0;
      margin-right: 1rem;
      &:last-child {
        margin-right: unset;
      }
    }
  }
`
const linkStyle = css``

const NavbarLinks = () => (
  <div css={wrapperStyle}>
    {navbarLinks.map((item, index) => (
      <Link css={linkStyle} key={index} to={`${item.path}`}>
        {item.text}
      </Link>
    ))}
  </div>
)

export default NavbarLinks

//<AnchorLink href="#about">About</AnchorLink>
//<AnchorLink href="#projects">Projects</AnchorLink>
//<AnchorLink href="#contact">Contact</AnchorLink>
