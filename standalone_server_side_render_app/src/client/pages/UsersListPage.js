import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{ user.name }</li>;
    });
  }

  // this function is to load tags into the head tag of our HTML document
  head() {
    return (
      <Helmet>
        <title>{ `${this.props.users.length} users loaded` }</title>
        <meta property='og:title' content='Users App' />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        { this.head() }
        Here is a big list of users:
        <ul>
          { this.renderUsers() }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = ({ users }) => ({ users });

// for loading data with server side rendering
const loadData = store => {
  // manually dispatch action creator
  return store.dispatch( fetchUsers() );
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};

