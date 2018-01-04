import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchSurvey } from '../actions';
import SurveyList from '../components/surveys/SurveyList';

class SurveysPage extends Component {
  componentDidMount() {
    this.props.fetchSurvey();
  }

  renderHead() {
    return (
      <Helmet>
        <title>Survey Dashboard</title>
        <meta property='og:title' content='Survey Dashboard' />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        { this.renderHead() }
        <SurveyList />
        <div className="fixed-action-btn">
          <Link to='/surveys/new' className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });

// for loading data with server side rendering
const loadData = store => {
  // manually dispatch action creator
  return store.dispatch( fetchSurvey() );
};

export default {
  component: connect(mapStateToProps, { fetchSurvey })(SurveysPage),
  loadData,
};

