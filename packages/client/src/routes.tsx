import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Overview} />
    </Switch>
  );
};

export default Routes;
