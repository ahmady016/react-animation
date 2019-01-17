import React, { Component } from 'react';
import BoxAnimation from './BoxAnimation';
import ListAnimation from './ListAnimation';
import './app.css';

const App = props => (
  <div className="container">
    <ListAnimation />
    <BoxAnimation />
  </div>
);

export default App;