import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default function Routes(store) {

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="layout" component={Layout}/>
      <Route path="about" component={AboutPage}/>
    </Route>
  );
}
