// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if ( this.state.showFormReview ) {
      return <SurveyFormReview onCancel={ this.toggleReview }/>;
    }

    return <SurveyForm onSurveySubmit={ this.toggleReview } />;
  }

  toggleReview = () => {
    const showFormReview = !this.state.showFormReview;
    this.setState({ showFormReview });
  };

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    )
  }
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);