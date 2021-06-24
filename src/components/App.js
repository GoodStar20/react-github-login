import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Search from './Search';
import Result from './Result';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Route exact path="/" component={Search} />
      <Route exact path="/result" component={Result} />
    </div>
  );
};

export default withRouter(App);
