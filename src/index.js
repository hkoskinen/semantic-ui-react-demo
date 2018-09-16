import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageHeader  from './components/PageHeader';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>Page not found</p>
  </div>
);

ReactDOM.render(
  <Router>
    <div>
      <PageHeader />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/register' component={RegisterPage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
