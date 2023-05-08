import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './App/homeComponents/globalStyle';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPageContent from './about/Aboutpage';
import Login from './components/Login';
import Header from './components/Header/indexHeader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> 
  }, 
  {
    path: '/about', 
    element: <AboutPageContent /> 
  }, 
  {
    path: '/login',
    element: <Login /> 
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
);
