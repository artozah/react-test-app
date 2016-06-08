import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>React Redux Router</h1>
      <p>This is a test project</p>
      <Link to="about" className="btn btn-primary btn-lg">About</Link>
    </div>
  );
};

export default HomePage;
