import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { containerstore } from './redux/store/store.js';

const root = createRoot(document.getElementById('root'));

root.render(
<Provider store={containerstore}>
<App />
</Provider> 
);

