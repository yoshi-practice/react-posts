import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from '../config';
import Posts from '../components/Posts';
import GeneratePost from '../components/GeneratePost';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Posts } />
      <Route path="/posts" component={ Posts } />
      <Route path="/generate" component={ GeneratePost } />
    </Route>
  </Router>
);

export default Routes;
