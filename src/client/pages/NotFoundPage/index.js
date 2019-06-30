import React from 'react'
import PropTypes from 'prop-types'


// recieving staticContext prop from static router
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true // we can check this property
  return <h1>Oops, route not found</h1>
}


NotFoundPage.defaultProps = {
  staticContext: {}
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.object
}

export default {
  component: NotFoundPage
}