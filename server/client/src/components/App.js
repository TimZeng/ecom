import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    // The reasons to use componentDidMount:
    //  1. in future version of React, componentWillMount()
    //     will be automatically called multiple times,
    //     so componentDidMount is the preferred place for initial ajax request
    //  2. the time difference between componentWillMount and componentDidMount
    //     is essentially none
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={ Landing } />
            <Route exact path='/surveys' component={ Dashboard } />
            <Route exact path='/surveys/new' component={ SurveyNew } />
          </div>
        </BrowserRouter>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({fetchUser}, dispatch);

export default connect(null, mapDispatchToProps)(App);