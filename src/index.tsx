import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import reportWebVitals from './reportWebVitals';
import App from './App.tsx';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
