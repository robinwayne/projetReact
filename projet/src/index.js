import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/mainPanel/Main';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
