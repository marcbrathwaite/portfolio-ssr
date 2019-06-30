export const SET_ID = 'SET_ID'
export const RESET_ID = 'RESET_ID'

export const setSectionId = (id) => {
  return (dispatch) => {
    dispatch({
      type: SET_ID,
      payload: id
    })
  }
}

export const resetSectionId = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_ID
    })
  }
}
