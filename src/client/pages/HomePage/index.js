import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Component
import HomeComponent from '../../components/HomeComponent'

// Action Creators
import { getHomePageContent } from '../../actions/homePage'
import { setSectionId } from '../../actions/sectionId'

// Selectors
import { getHomePage, getHomePageStatus } from '../../reducers/pageContentReducer'
import { getSelectedSectionId } from '../../reducers/sectionIdReducer'

// Constants
import { statusMessages, sectionIds } from '../../constants'

const { SUCCESS, FAILURE } = statusMessages

const {
  aboutId,
  workId,
  skillsId,
  contactId
} = sectionIds

class HomePage extends Component {

  constructor() {
    super()
    this.renderPage = this.renderPage.bind(this)
    this.isSection = this.isSection.bind(this)
  }

  componentDidMount() {
    const { pageStatus, getHomePageContent, setSectionId } = this.props
    if (pageStatus === FAILURE) {
      getHomePageContent()
    }
    if (pageStatus === SUCCESS) {
      if (window && this.isSection(window.location.hash)) {
        setSectionId(window.location.hash)
      }
    }
  }

  isSection(section){
    return section === aboutId || section === workId || section === skillsId || section === contactId
  }

  renderPage() {
    const { pageStatus, pageContent, selectedSectionId } = this.props
    switch (pageStatus) {
      case SUCCESS: {
        return (
          <HomeComponent
            content={pageContent}
            selectedSectionId={selectedSectionId}
          /> 
        )
      }
      case FAILURE: {
        return <div>Error</div>
      }
      default: {
        return <div>Loading</div>
      }
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderPage()}
      </Fragment>
    )
  }
}


function loadData(state) {
  return state.dispatch(getHomePageContent())
}

const mapStateToProps = (state) => {
  return {
    pageStatus: getHomePageStatus(state),
    pageContent: getHomePage(state),
    selectedSectionId: getSelectedSectionId(state)
  }
}

HomePage.propTypes = {
  pageStatus: PropTypes.string.isRequired,
  pageContent: PropTypes.object,
  selectedSectionId: PropTypes.string
}


const ConnectedHomePage = connect(
  mapStateToProps,
  {
    getHomePageContent,
    setSectionId
  }
)(HomePage)
export default {
  component: ConnectedHomePage,
  loadData
}
