import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Heading1 = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 6.5rem;
  line-height: 1.6;
  color: ${props => props.invert ? 'black' : '#f1f1f1'};
`

const Heading2 = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 1.6;
  color: ${props => props.invert ? 'white' : 'black'};
  position: relative;
  text-align: center;
  margin-bottom: ${props => props.invert ? '30px' : '50px'};
  align-self: ${props => props.invert ? 'stretch' : 'auto'};
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 10%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 5px solid #2EC4B6;
  }
`

const Heading3 = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.6;
  color: ${props => props.invert ? 'white' : '#2EC4B6'};
  margin-bottom: 20px;
`

const Heading = ({ className, level, tag, invert, children }) => {
  const htmlTag = tag ? tag : level
  
  switch (level) {
    case 'h1':
      return React.createElement(
        Heading1,
        { as: htmlTag, className: className, invert: invert },
        children
      )
    case 'h2':
      return React.createElement(
        Heading2,
        { as: htmlTag, className: className, invert: invert },
        children
      )
    case 'h3':
      return React.createElement(
        Heading3,
        { as: htmlTag, className: className, invert: invert },
        children
      )
    default:
      return null
  }
}

Heading.defaultProps = {
  tag: null,
  invert: false
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string.isRequired,
  tag: PropTypes.string
}

export default Heading
