import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
`

const Wrapper = ({ className, children }) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
