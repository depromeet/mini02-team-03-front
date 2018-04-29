import React from 'react';
import ReactDOM from 'react-dom';
import Root from './mobweb/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
