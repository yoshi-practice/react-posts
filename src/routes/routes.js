import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from '../config';
import Posts from '../components/Post';
import GeneratePost from '../components/Generate';
import Pages from '../components/Pages';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Pages } />
      <Route path="/posts" component={ Posts } />
      <Route path="/generate" component={ GeneratePost } />
    </Route>
  </Router>
);

export default Routes;
