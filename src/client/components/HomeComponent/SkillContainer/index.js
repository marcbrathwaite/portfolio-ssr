import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Paragraph from '../../Common/typography/Paragraph'

const Icon = styled.i`
  font-size: 7.5rem;
  color: #36454F;
`

const SkillName = styled(Paragraph)`
  margin-top: 15px;
  color: #36454F;
  text-align: center;
`

const SkillContainer = ({ className, skillName }) => {
  return (
    <Fragment>
      <Icon className={className} />
      <SkillName>
        {skillName}
      </SkillName>
    </Fragment>
  )
}


SkillContainer.propTypes = {
  className: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired
}

export default SkillContainer
