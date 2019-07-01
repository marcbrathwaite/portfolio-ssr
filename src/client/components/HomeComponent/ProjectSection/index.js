import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import reactStringReplace from 'react-string-replace'

import Wrapper from '../../Common/Wrapper'
import Heading from '../../Common/typography/Heading'
import Paragraph from '../../Common/typography/Paragraph'

import { collabMapping } from '../../../constants'
import media from '../../../utils/screenSizeHelper'


const Container = styled(Wrapper)`
  position: relative;
  z-index: 40;
`

const ProjectContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding: 45px 35px;
  background: white;
  border-radius: 15px;
  flex-wrap: wrap;
  :last-of-type {
      margin-bottom: 0;
  }
  ${media.lg`
    flex-direction: ${(props) => props.isLeftAlign ? 'column' : 'column-reverse'};
    align-items: center;
  `}
`

const ProjectImageContainer = styled.div`
  flex: 1 0 calc(30% - 30px);
  margin-right: ${(props) => props.isLeftAlign ? '60px' : '0px'};
  ${media.lg`
    margin-bottom: 25px;
    margin-right: 0;
  `}
`

const ProjectDescContainer = styled.div`
  flex: 1 0 calc(70% - 30px);
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => !props.isLeftAlign ? '60px' : '0'};
  text-align: ${(props) => !props.isLeftAlign ? 'right' : 'left'};
  ${media.lg`
    width: 100%;
    text-align: left;
    margin: 0;
  `}
`

const ProjectDesc = styled(Paragraph)`
  margin-bottom: 20px;
`

const ProjectTechContainer = styled(Paragraph)`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-self: ${(props) => props.isLeftAlign ? 'auto' : 'flex-end'};
  justify-content: ${(props) => props.isLeftAlign ? 'auto' : 'flex-end'};
  ${media.lg`
    align-self: ${(props) => props.isLeftAlign ? 'auto' : 'flex-start'};
    justify-content: ${(props) => props.isLeftAlign ? 'auto' : 'flex-start'};
  `}
`

const ProjectTech = styled.span`
  display: block;
  margin-right: ${(props) => props.isLeftAlign ? '10px' : '0'};
  margin-left: ${(props) => props.isLeftAlign ? '0' : '10px'};
  border: 3px solid black;
  margin-bottom: 5px;
  padding: 3px 5px;
  :last-of-type {
    margin-right: 0;
  }
  ${media.lg`
    margin-right: 10px;
    margin-left: 0;
  `}
`
const CollabLink = styled.a`
  color: black;
`

const ButtonContainer = styled.div`
  display: flex;
  align-self: ${(props) => props.isLeftAlign ? 'auto' : 'flex-end'};
  ${media.lg`
  align-self: ${(props) => props.isLeftAlign ? 'auto' : 'flex-start'};
  `}
`

const Button = styled.a`
  display: block;
  font-size: 1.8rem;
  color: white;
  background: #242582;
  text-decoration: none;
  margin-right: 10px;
  padding: 10px 15px;
  border: 1px solid transparent;
  transition: background border 0.2s;
  text-align: center;
  :last-of-type {
      margin-right: 0;
  }
  :hover,
  :active {
      border: 1px solid black;
      background: white;
      color: #242582;
  }
  ${media.sm`
    padding: 8px 10px;
  `}
`

const Projects = ({ content }) => {
  const {
    title,
    projects
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
        projects && projects.map((project, index) => {
          const {
            id,
            title,
            description,
            projectImage,
            techStackList,
            liveButtonText,
            liveButtonTitle,
            liveButtonUrl,
            githubButtonText,
            githubButtonTitle,
            githubButtonUrl
          } = project
          const isLeftAlign = index % 2 === 0
          return (
            <ProjectContainer
              key={id}
              isLeftAlign={isLeftAlign}
            >
              {
                isLeftAlign
                  ?
                  <Fragment>
                    <ProjectImageContainer
                      isLeftAlign={isLeftAlign}
                    >
                      {
                        liveButtonUrl &&
                        <a
                          href={liveButtonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {
                            projectImage.url && projectImage.description &&
                            <img
                              src={projectImage.url}
                              alt={projectImage.description}
                            />
                          }
                        </a>
                      }
                    </ProjectImageContainer>
                    <ProjectDescContainer
                      isLeftAlign={isLeftAlign}
                    >
                      {
                        title &&
                        <Heading
                          level='h3'
                        >
                          {title}
                        </Heading>
                      }
                      {
                        description && 
                        <ProjectDesc>
                          {
                            reactStringReplace(
                              description,
                              /(collab\d)/,
                              (match, i) => (
                                <CollabLink
                                  key={i}
                                  href={collabMapping[match].link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {collabMapping[match].name}
                                </CollabLink>
                              )
                            )
                          }
                        </ProjectDesc>
                      }
                      {
                        techStackList &&
                        <ProjectTechContainer
                          isLeftAlign={isLeftAlign}
                        >
                          {
                            techStackList.map((tech, index) => {
                              return (
                                <ProjectTech
                                  key={`${tech}-${index}`}
                                  isLeftAlign={isLeftAlign}
                                >
                                  {tech}
                                </ProjectTech>
                              )
                            })
                          }
                        </ProjectTechContainer>
                      }
                      <ButtonContainer
                        isLeftAlign={isLeftAlign}
                      >
                        {
                          liveButtonUrl && liveButtonTitle && liveButtonText &&
                          <Button
                            href={liveButtonUrl}
                            title={liveButtonTitle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liveButtonText}
                          </Button>
                        }
                        {
                          githubButtonText && githubButtonTitle && githubButtonUrl &&
                          <Button
                            href={githubButtonUrl}
                            title={githubButtonTitle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {githubButtonText}
                          </Button>
                        }
                      </ButtonContainer>
                    </ProjectDescContainer>
                  </Fragment>
                  :
                  <Fragment>
                    <ProjectDescContainer
                      isLeftAlign={isLeftAlign}
                    >
                      {
                        title &&
                        <Heading
                          level='h3'
                        >
                          {title}
                        </Heading>
                      }
                      {
                        description && 
                        <ProjectDesc>
                          {
                            reactStringReplace(
                              description,
                              /(collab\d)/,
                              (match, i) => (
                                <CollabLink
                                  key={i}
                                  href={collabMapping[match].link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {collabMapping[match].name}
                                </CollabLink>
                              )
                            )
                          }
                        </ProjectDesc>
                      }
                      {
                        techStackList &&
                        <ProjectTechContainer
                          isLeftAlign={isLeftAlign}
                        >
                          {
                            techStackList.map((tech, index) => {
                              return (
                                <ProjectTech
                                  key={`${tech}-${index}`}
                                  isLeftAlign={isLeftAlign}
                                >
                                  {tech}
                                </ProjectTech>
                              )
                            })
                          }
                        </ProjectTechContainer>
                      }
                      <ButtonContainer
                        isLeftAlign={isLeftAlign}
                      >
                        {
                          liveButtonUrl && liveButtonTitle && liveButtonText &&
                          <Button
                            href={liveButtonUrl}
                            title={liveButtonTitle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {liveButtonText}
                          </Button>
                        }
                        {
                          githubButtonText && githubButtonTitle && githubButtonUrl &&
                          <Button
                            href={githubButtonUrl}
                            title={githubButtonTitle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {githubButtonText}
                          </Button>
                        }
                      </ButtonContainer>
                    </ProjectDescContainer>
                    <ProjectImageContainer
                      isLeftAlign={isLeftAlign}
                    >
                      <a
                        href={liveButtonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={projectImage.url}
                          alt={projectImage.description}
                        />
                      </a>
                    </ProjectImageContainer>
                  </Fragment>
              }

            </ProjectContainer>
          )
        })
      }
    </Container>
  )
}


Projects.propTypes = {
  content: PropTypes.object.isRequired
}

export default Projects
