import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes.js';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();