import { NAV_BAR } from '../actions/showNav'

const defaultState = false

export default (state = defaultState, action) => {
  if (action.type === NAV_BAR) {
    return action.payload
  }
  return state
}

export const getShowNav = ({ showNav }) => {
  return showNav
}
