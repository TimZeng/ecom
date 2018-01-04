import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurvey();
  }

  renderSurveys() {
    const { surveys } = this.props;
    return surveys.map(survey =>
      <div key={ survey._id } className='card darken-1'>
        <div className='card-content'>
          <span className='card-title'>{ survey.title }</span>
          <p>
            { survey.body }
          </p>
          <p className='right'>
            Sent On: { survey.dateSent.slice(5,10).replace('-','/') }
          </p>

          <div className='card-action'>
            <a>Yes: { survey.yes }</a>
            <a>No: { survey.no }</a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderSurveys() }
      </div>
    );
  }
};

const mapStateToProps = ({ surveys }) => ({ surveys });

export default connect(mapStateToProps, { fetchSurvey })(SurveyList);