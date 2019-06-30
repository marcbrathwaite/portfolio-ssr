export const NAV_BAR = 'NAV_BAR'

export const setNavState = () => {
  return (dispatch, getState) => {
    const { showNav } = getState()
    dispatch({
      type: NAV_BAR,
      payload: !showNav
    })
  }
}