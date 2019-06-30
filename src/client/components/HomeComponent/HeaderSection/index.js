import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { setNavState } from '../../../actions/showNav'
import { getShowNav } from '../../../reducers/showNavReducer'
import Wrapper from '../../Common/Wrapper'
import Heading from '../../Common/typography/Heading'
import Paragraph from '../../Common/typography/Paragraph'
import NavigationBar from '../NavigationBar'


const HeaderContainer = styled.header`
  height: 105vh;
  background: linear-gradient(to bottom, #242682e0, #242682e0),url('${props => props.backgroundImage}');
  background-size: cover;
`

const Hamburger = styled.label`
  position: fixed;
  top: 19px;
  right: 30px;
  font-size: 2.5rem;
  color: #2EC4B6;
  z-index: 100;
  cursor: pointer;
`

const SubContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85%;
`
const MyName = styled.span`
  color: #2EC4B6;
`

const Header = ({ content, isClicked, setNavState }) => {
  const {
    backgroundImage,
    navigationBar,
    headerTitle,
    myName,
    headerSubtitle
  } = content

  const handleClick = () => {
    setNavState()
  }
  return (
    <React.Fragment>
      {
        backgroundImage &&
        <HeaderContainer backgroundImage={backgroundImage.url}>
          <Hamburger onClick={handleClick}>
            <i className="fas fa-bars"></i>
          </Hamburger>
          <NavigationBar content={navigationBar} isClicked={isClicked} />
          <SubContainer>
            <Wrapper>
              <Heading level="h1">
                {headerTitle}
                {' '}
                <MyName>
                  {myName}
                </MyName>
              </Heading>
              <Paragraph inverted={true}>
                {headerSubtitle}
              </Paragraph>
            </Wrapper>
          </SubContainer>
        </HeaderContainer>
      }
    </React.Fragment>
  ) 
}

Header.propTypes = {
  content: PropTypes.object.isRequired,
  isClicked: PropTypes.bool.isRequired,
  setNavState: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => {
  return {
    isClicked: getShowNav(state)
  }
}

export default connect(
  mapStateToProps,
  {
    setNavState
  }
)(Header)
