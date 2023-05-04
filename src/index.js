import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './App/components/Global.style';
import Login from './components/Login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Login />
  </React.StrictMode>
);
