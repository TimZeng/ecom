import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
      <BrowserRouter>
        <div>
          <Header />
          <div className='container'>
            <Route exact path='/' component={ Landing } />
            <Route exact path='/surveys' component={ Dashboard } />
            <Route exact path='/surveys/new' component={ SurveyNew } />
          </div>
        </div>
      </BrowserRouter>
    )
  }
};

export default connect(null, actions)(App);
