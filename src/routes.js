'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';
import Button from './components/Button';

const routes = (
      <Route path="/" component={Button}/>
);

export default routes;
