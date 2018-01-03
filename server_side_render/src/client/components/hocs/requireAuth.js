import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// This is a Higher Order Component
// Higher Order Component is a function called with child component

// for this example:
// every child component that requires users to be logged in
// should be passed into this RequireAuth HOC
export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      switch ( this.props.auth ) {

        case false:
          return <Redirect to='/' />;

        case null:
          return <div>Loading...</div>;

        default:
          // any props been passed to the HOC component should
          // also be passed to the child component
          return <ChildComponent { ...this.props }/>;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  // return the HOC component
  return connect(mapStateToProps)(RequireAuth);
};