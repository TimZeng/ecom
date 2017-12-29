import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../actions';

class StripeBilling extends Component {
  render() {
    return (
      <StripeCheckout
        name='Mini Ecom Site'
        description='$5 for 5 credits'
        amount={ 500 }
        token={ this.props.handleToken }
        stripeKey={ process.env.REACT_APP_STRIPE_KEY }
      >
        <button className='btn'>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
};

export default connect(null, actions)(StripeBilling);