import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PTag = styled.p`
  font-family: 'Cabin', sans-serif;
  font-size: 1.8rem;
  line-height: 1.6;
  color: ${props => props.inverted ? '#f1f1f1' : 'black'};
`

const Paragraph = ({ className, children, inverted }) => {
  return (
    <PTag className={className} inverted={inverted}>
      {children}
    </PTag>
  )
}

Paragraph.defaultProps = {
  inverted: false
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  inverted: PropTypes.bool
}

export default Paragraph
