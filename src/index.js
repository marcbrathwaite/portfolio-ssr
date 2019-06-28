import "regenerator-runtime/runtime";
import express from 'express'

import createStore from './helpers/createStore'

const app = express()

//make public directory available, and serve up bundle.js on client side
app.use(express.static('public'))

app.get('*', (req, res) => {
  // create redux store
  const store = createStore()
  
  res.send(content)
})

//listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
})