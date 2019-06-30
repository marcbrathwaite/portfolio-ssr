import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Wrapper from '../../Common/Wrapper'
import Heading from '../../Common/typography/Heading'
import Paragraph from '../../Common/typography/Paragraph'

const Container = styled(Wrapper)`
  position: relative;
  z-index: 20;
`

const ColumnWrapper = styled.div`
  display: flex;
  width: 100%;
`

const ImgComtainer = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 10px 10px #36454F;
  margin-right: 55px;
`

const ProfileImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const TextContainer = styled.div`
  flex: 1 0 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled(Paragraph)`
  margin-bottom: 15px;
  :last-of-type {
    margin-bottom: 0;
  }
`

const About = ({ content }) => {
  const {
    title,
    profileImage,
    paragraphs
  } = content
  return (
    <Container>
      {
        title &&
        <Heading level="h2">
          {title}
        </Heading>
      }
      <ColumnWrapper>
        {
          profileImage &&
          <ImgComtainer>
            <ProfileImage
              src={profileImage.url}
              alt={profileImage.description}
            />
          </ImgComtainer>
        }
        <TextContainer>
          {
            paragraphs &&
            paragraphs.map((paragraph) => {
              return (
                <Text key={paragraph._id}>
                  {paragraph.text}
                </Text>
              )
            })
          }
        </TextContainer>
      </ColumnWrapper>
    </Container>
  )

}

About.propTypes = {
  content: PropTypes.object.isRequired
}

export default About
