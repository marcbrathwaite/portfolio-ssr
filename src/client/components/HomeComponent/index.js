import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import { resetSectionId } from "../../actions/sectionId";

import Header from "./HeaderSection";
import About from "./AboutSection";
import Projects from "./ProjectSection";
import Skills from "./SkillsSection";
import Contact from "./ContactSection";
import Footer from "./FooterSection";

import { sectionIds } from '../../constants'

const {
  aboutId,
  workId,
  skillsId,
  contactId
} = sectionIds

const AboutSection = styled.section`
  padding-top: 50px;
  position: relative;
  padding-bottom: 200px;
  ::after {
    z-index: 10;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transform: skewY(-5deg);
    transform-origin: top left;
  }
`;

const ProjectSection = styled.section`
  padding-top: 100px;
  padding-bottom: 200px;
  position: relative;
  background: #eaedf4;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: skewY(-5deg);
    transform-origin: top left;
  }
`;

const SkillsSection = styled.section`
  padding-top: 50px;
  padding-bottom: 200px;
  background: white;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: skewY(5deg);
    transform-origin: top right;
  }
`;

const ContactSection = styled.section`
  padding-top: 50px;
  padding-bottom: 75px;
  background: #36454f;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform: skewY(5deg);
    transform-origin: top right;
  }
`;

const FooterSection = styled.footer`
  padding: 5px 0;
  background: #eaedf4;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.projectRef = React.createRef();
    this.skillsRef = React.createRef();
    this.contactRef = React.createRef();
    this.sectionMapping = {
      [aboutId]: this.aboutRef,
      [workId]: this.projectRef,
      [skillsId]: this.skillsRef,
      [contactId]: this.contactRef
    };
  }

  componentDidMount() {
    this.scrollToSection();
  }

  componentDidUpdate() {
    this.scrollToSection();
  }

  scrollToSection = () => {
    const { selectedSectionId, resetSectionId } = this.props;
    if (selectedSectionId) {
      const { offsetTop } = this.sectionMapping[selectedSectionId].current;
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth"
      });
      resetSectionId();
    }
  };

  render() {
    const { content } = this.props;
    if (content) {
      const { headerSection, sections, footerSection } = content;
      return (
        <React.Fragment>
          {headerSection && <Header content={headerSection} />}
          <main>
            {sections &&
              sections.map(section => {
                switch (section._type) {
                  case "aboutSection":
                    return (
                      <AboutSection
                        key={section._id}
                        ref={this.aboutRef}
                        id={section.htmlId}
                      >
                        <About content={section} />
                      </AboutSection>
                    );
                  case "projectSection":
                    return (
                      <ProjectSection
                        key={section._id}
                        ref={this.projectRef}
                        id={section.htmlId}
                      >
                        <Projects content={section} />
                      </ProjectSection>
                    );
                  case "skillsSection":
                    return (
                      <SkillsSection
                        key={section._id}
                        ref={this.skillsRef}
                        id={section.htmlId}
                      >
                        <Skills content={section} />
                      </SkillsSection>
                    );
                  case "contactSection":
                    return (
                      <ContactSection
                        key={section._id}
                        ref={this.contactRef}
                        id={section.htmlId}
                      >
                        <Contact content={section} />
                      </ContactSection>
                    );
                  default:
                    return null;
                }
              })}
          </main>
          <FooterSection>
            {footerSection && <Footer content={footerSection} />}
          </FooterSection>
        </React.Fragment>
      )
    }
    return null;
  }
}

HomePage.defaultProps = {
  content: {},
  selectedSectionId: ""
};

HomePage.propTypes = {
  content: PropTypes.object,
  selectedSectionId: PropTypes.string
};

export default connect(
  null,
  {
    resetSectionId
  }
)(HomePage);
