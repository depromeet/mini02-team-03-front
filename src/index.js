import React from 'react';
import ReactDOM from 'react-dom';
import Root from './mobweb/Root';
import registerServiceWorker from './registerServiceWorker';
import './css/styles.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
