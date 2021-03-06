// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, field =>
      <Field key={ field.name } component={ SurveyField } type='text' { ...field } />
    );
  }

  render() {
    const { handleSubmit, onSurveySubmit } = this.props;
    return (
      <div style={{marginTop: '30px'}}>
        <form onSubmit={ handleSubmit( onSurveySubmit ) }>
          { this.renderFields() }
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button className='teal btn-flat right white-text' type='submit'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    )
  }
};

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, label }) => {
    if ( !values[name] ) errors[name] = `${label} is required`;
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);

