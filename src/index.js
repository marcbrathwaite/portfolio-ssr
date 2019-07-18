import "regenerator-runtime/runtime";
import express from 'express'
import { matchRoutes } from 'react-router-config'

import routes from './client/routes'

// Helper to create redux store
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

const app = express()

//make public directory available, and serve up bundle.js on client side
app.use(express.static('public'))

app.get('*', (req, res) => {
  // create redux store
  const store = createStore()

  // Get path user requested
  const { path } = req

  // matchRoutes will look at the path the user requested
  // based on the routes, will return an array of promises to be rendered
  const promises = matchRoutes(routes, path).map(({ route }) => {
    const { loadData } = route
    // Call loadData function on routes that have it, thus returning an array of promises
    return loadData ? loadData(store) : null
  }).map((promise) => {
    // wrap each promise in a promise, which resolve regardless of if the inner promise fails
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve)
      })
    }
  })

  Promise.all(promises).then(() => {
    // define contetxt object and pass it into renderer function

    const context = {}
    const content = renderer(req, store, context)
    if (context.notFound) {
      res.status(404) // if user chooses incorrect route, send 404
    }
    res.send(content)
  })

  
})

//listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
})