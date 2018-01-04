import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SurveysPage from './pages/SurveysPage';
import SurveyNew from './components/surveys/SurveyNew';

/*
 * Traditional react router setup:
 * but react-router has to render the entire app
 * to figure out which component to show
 *
 *export default () => {
 *  return (
 *    <div>
 *      <Route exact path='/' component={ Home } />
 *      <Route exact path='/users' component={ UsersList } />
 *    </div>
 *  );
 *};
*/

// instead we use a javascript object to represent routing config
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...SurveysPage,
        path: '/surveys',
        exact: true
      },
      {
        ...SurveyNew,
        path: '/surveys/new',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

