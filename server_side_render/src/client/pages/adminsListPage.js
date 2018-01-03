import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={ admin.id }>{ admin.name }</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>
          { this.renderAdmins() }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = ({ admins }) => ({ admins });

// for loading data with server side rendering
const loadData = store => {
  // manually dispatch action creator
  return store.dispatch( fetchAdmins() );
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
  loadData
};

