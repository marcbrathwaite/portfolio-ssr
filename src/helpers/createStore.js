// Create redux store on server
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../client/reducers'
import contentful from '../api/contentful'

export default () => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(contentful))
  )

  return store
}
