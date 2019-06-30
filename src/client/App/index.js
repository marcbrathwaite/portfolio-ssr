import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Helmet } from "react-helmet"

// CSS
import '../css/normalize.css'

const App = ({ route }) => {
  const { routes } = route

  const renderHead = () => {
    return (
      <Helmet>
        <title>Marc Brathwaite | Developer</title>
      </Helmet>
    )
  }
  return (
    <div>
      {renderHead()}
      {renderRoutes(routes)}
    </div>
  )
}

export default {
  component: App
}