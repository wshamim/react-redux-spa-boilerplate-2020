import React from 'react';

import loadable from '@loadable/component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const NotFound = loadable(() => import('../containers/Pages/Status/404.jsx'));
const ToDoApp = loadable(() => import('../containers/Pages/ToDoApp.jsx'));

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ToDoApp} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
