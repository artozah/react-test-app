import React from 'react';
import {Link} from 'react-router';
import WizardForm from '../form/WizardForm';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is About page</p>
      <WizardForm />
      <Link to="/" activeClassName="active">Go to Home</Link>
    </div>
  );
};

export default AboutPage;
