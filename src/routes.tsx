// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" pages={SignInPage} />
        <Route path="/signup" pages={SignUpPage} />
        <Route path="/dashboard" pages={DashboardPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
