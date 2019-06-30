// Action type
export const HOME_PAGE = 'HOME_PAGE'

// Constants
import { statusMessages } from '../constants'

const { SUCCESS, FAILURE } = statusMessages

export const getHomePageContent = () => {
  return async (dispatch, getState, api) => {
    try {
      const result = await api.getModels({
        content_type: "homePage"
      })
      dispatch({
        type: HOME_PAGE,
        status: SUCCESS,
        payload: result.items[0]
      })

    } catch {
      dispatch({
        type: HOME_PAGE,
        status: FAILURE
      })
    }    
  }
}
