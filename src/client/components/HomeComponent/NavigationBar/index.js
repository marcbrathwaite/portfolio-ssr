import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { setSectionId } from '../../../actions/sectionId'

const NavBar = styled.nav`
  display: flex;
  position: fixed;
  top: ${(props) => props.isClicked ? '0px' : '-100%'};
  left:0;
  right:0;
  background: #36454F;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  z-index: 90;
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`

const NavLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 1.6;
  color: white;
  text-decoration: none;
  transition: border-bottom 0.2s;
  :hover,
  :active {
      border-bottom:2px solid #242682;
  }
`

const NavigationBar = ({ content, isClicked, setSectionId }) => {

  const handleClick = (event) => {
    event.preventDefault()
    const id = event.target.name
    setSectionId(id)

  }
  return (
    <NavBar isClicked={isClicked}>
      <NavList>
        {
          content.links
            ?
            content.links.map((link) => {
              return (
                <li key={link._id}>
                  <NavLink
                    href={link.linkUrl}
                    onClick={handleClick}
                    name={link.linkUrl}
                  >
                    {link.linkText}
                  </NavLink>
                </li>
              )
            })
            :
            null
        }
      </NavList>
    </NavBar>
  )
}

export default connect(null, { setSectionId })(NavigationBar)