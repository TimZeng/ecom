import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StripeBilling from './StripeBilling';

class Header extends Component {
  renderContent() {
    switch( this.props.auth ) {
      case null:
        return;

      case false:
        return <li><a href='/api/auth/google'>Login With Google</a></li>;

      default:
        return [
          <li key='1'><StripeBilling /></li>,
          <li key='2' style={{ margin: '0 15px' }}>
            Credits: { this.props.auth.credits }
          </li>,
          <li key='3'><a href='/api/api/logout'>Logout</a></li>
        ];

    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={ !!this.props.auth ? '/surveys' : '/' }
            className="left brand-logo"
          >
            &nbsp;&nbsp;&nbsp;Mini e-commerce site
          </Link>
          <ul className="right">
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    )
  }
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);