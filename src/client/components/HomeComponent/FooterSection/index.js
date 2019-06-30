import React  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Wrapper from '../../Common/Wrapper'
import Paragraph from '../../Common/typography/Paragraph'


const FooterText = styled(Paragraph)`
  color: #36454F;
  text-align: center;
`

const FooterLink = styled.a`
  color: #36454F;
  text-decoration: none;
  transition: color 0.2s;
  &:hover,
  &:active {
      color: #2EC4B6;
  } 

`

const Footer = ({ content }) => {

  const { footerText, photoCreditLinkText, photoCreditLinkUrl } = content
  return (
    <Wrapper>
      {
        footerText &&
        <FooterText>
          {footerText}
          {' '}
          {
            photoCreditLinkText && photoCreditLinkUrl &&
            <FooterLink href={photoCreditLinkUrl}>
              {photoCreditLinkText}
            </FooterLink>
          }
        </FooterText>
      }
    </Wrapper>
  )
}

Footer.propTypes = {
  content: PropTypes.object.isRequired
}

export default Footer
