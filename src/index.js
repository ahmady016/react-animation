import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import addExtensions from './extensions';
import './index.css';

addExtensions();

ReactDOM.render(<App />, document.getElementById('root'));
