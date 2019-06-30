import { HOME_PAGE } from '../actions/homePage'

import { statusMessages } from '../constants'

const { PENDING } = statusMessages

const defaultState = {
  status: PENDING,
  homePage: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOME_PAGE:
      return {
        ...state,
        status: action.status,
        homePage: action.payload
      }
    default:
      return state
  }
}

export const getHomePage = ({ pageContent }) => {
  return pageContent.homePage
}

export const getHomePageStatus = ({ pageContent }) => {
  return pageContent.status
}
