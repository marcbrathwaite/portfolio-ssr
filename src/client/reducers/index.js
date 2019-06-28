import { combineReducers } from 'redux'
import pageContentReducer from './pageContentReducer'
import showNavReducer from './showNavReducer'
import sectionIdReducer from './sectionIdReducer'

export default combineReducers({
  pageContent: pageContentReducer,
  showNav: showNavReducer,
  selectedSectionId: sectionIdReducer
})
