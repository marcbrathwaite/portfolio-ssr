import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Skill from '../SkillContainer'

import Wrapper from '../../Common/Wrapper'
import Heading from '../../Common/typography/Heading'

import media from '../../../utils/screenSizeHelper'

const Container = styled(Wrapper)`
  position: relative;
  z-index: 30
`

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;  
`

const SkillItem = styled.li`
  flex: 1 0 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :nth-of-type(n+5) {
    margin-top: 50px;
  }
  ${media.sm`
    flex: 1 0 33.33%;
    &:nth-of-type(n+4) {
        margin-top: 50px;
    }
  `}
`

const Skills = ({ content }) => {
  const {
    title,
    skills
  } = content
  return (
    <Container>
      {
        title &&
        <Heading level='h2'>
        {title} 
        </Heading>
      }
      {
        skills &&
        <SkillsList>
          {
            skills.map((skill) => {
              const { id, skillName, deviconClassName } = skill
              return (
                <SkillItem key={id}>
                  <Skill
                    className={deviconClassName}
                    skillName={skillName}
                  />
                </SkillItem>
              )
            })
          }
        </SkillsList>
      }
    </Container>
  )
}

Skills.propTypes = {
  content: PropTypes.object.isRequired
}

export default Skills
