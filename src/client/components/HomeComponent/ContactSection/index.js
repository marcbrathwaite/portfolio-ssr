import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Wrapper from '../../Common/Wrapper'
import Heading from '../../Common/typography/Heading'
import Paragraph from '../../Common/typography/Paragraph'

import media from '../../../utils/screenSizeHelper'

const Container = styled(Wrapper)`
  position: relative;
  z-index:30;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const ContactText = styled(Paragraph)`
  color: white;
  margin-bottom: 10px;
  text-align: center;
`

const EmailLink = styled.a`
  color: #2EC4B6;
  text-decoration: none;
  letter-spacing: 5px;
  font-size: 2.2rem;
  transition: color 0.2s;
  :hover,
  :active {
      color: white;
  }
  ${media.md`
    font-size: 1.8rem;
  `}
  ${media.sm`
    letter-spacing: 1px;
  `}
`

const SocialList = styled.ul`
  display: flex;
`

const SocialItem = styled.li`
  margin-right: 20px;
  :last-of-type {
    margin-right: 0;
  }
`

const SocialLink = styled.a`
  font-size:2.2rem;
  color: white;
  transition: color 0.2s;
  &:hover,
  &:active {
    color: #2EC4B6;
  }
`

const Contact = ({ content }) => {
  const {
    title,
    paragraphsAndLinks,
    socialMediaLinks
  } = content
  return (
    <Container>
      {
        title &&
        <Heading level='h2' invert>
          {title}
        </Heading>
      }
      {
        paragraphsAndLinks &&
        paragraphsAndLinks.map((paragraph) => {
          const { id, text, linkText, linkUrl } = paragraph
          return (
            <ContactText key={id}>
              {
                linkText && linkUrl &&
                <EmailLink href={linkUrl}>
                  {linkText}
                </EmailLink>
              }
              {
                text &&
                <Fragment>
                  {text}
                </Fragment>
              }
            </ContactText>
          )
        })
      }
      <SocialList>
        {
          socialMediaLinks &&
          socialMediaLinks.map((link) => {
            const {id, linkText, linkUrl, fontawesomeClass} = link
            return (
              <SocialItem key={id}>
                <SocialLink
                  href={linkUrl}
                  target="_blank"
                >
                  <i className={fontawesomeClass} />
                  <span className="visuallyhidden">{linkText}</span>
                </SocialLink>
              </SocialItem>
            )
          })
        }

      </SocialList>

    </Container>
  )
}

Contact.propTypes = {
  content: PropTypes.object.isRequired
}

export default Contact