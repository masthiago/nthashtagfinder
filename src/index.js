import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './App/homeComponents/globalStyle';
// import Login from './components/Login';
import './index.css';
import AboutPageContente from './about/Aboutpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <AboutPageContente />
    {/* <Login /> */}
  </React.StrictMode>
);
