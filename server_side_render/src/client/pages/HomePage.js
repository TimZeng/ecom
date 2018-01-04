import React from 'react';
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>Ecom Home</title>
        <meta property='og:title' content='Ecom Home' />
      </Helmet>
      <h1>Ecom!</h1>
      Collect feedback from your users
    </div>
  )
};

export default {
  component: Landing
};