import { css } from 'styled-components'
import { breakpoints } from '../constants'

const media = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = (...args) => css`
    @media (max-width: ${breakpoints[breakpoint]}) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media
