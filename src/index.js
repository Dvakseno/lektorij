import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './assets/fonts/alergia_remix-black/stylesheets.css';
import './assets/fonts/alergia_remix-regular/stylesheets.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
