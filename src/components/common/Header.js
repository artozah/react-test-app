import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ({user}) => {

  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

Header.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default Header;
