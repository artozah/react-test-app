import React from 'react';
import {Link} from 'react-router';

const LoginLink = () => {
  return (
    <span>
      <Link to="/auth" activeClassName="active">Login</Link>
    </span>
  );
};

export default LoginLink;
