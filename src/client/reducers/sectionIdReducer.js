import { SET_ID, RESET_ID } from '../actions/sectionId'

const defaultState = null

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ID:
      return action.payload
    case RESET_ID:
      return defaultState
    default:
      return state
  }
}

export const getSelectedSectionId = ({ selectedSectionId }) => {
  return selectedSectionId
}