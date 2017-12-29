// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// withRouter is helper provided by react-router
// to pass the hisotry object to a component through props
// history object is used to change route => history.push(newRoute)
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) =>
      <div key={ name }>
        <label>{ label }</label>
        <div>{ formValues[name] }</div>
      </div>
    );

  return (
    <div>
      <h5>Please confirm you entries</h5>

      <div>
        { reviewFields }
      </div>

      <button
        className='yellow darken-3 white-text btn-flat'
        onClick={ onCancel }
      >
        Back
      </button>

      <button
        className='green white-text btn-flat right'
        onClick={ () => submitSurvey(formValues, history) }
      >
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  )
};

const mapStateToProps = ({ form }) => ({ formValues: form.surveyForm.values });

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));