import React from 'react';
import ReactDOM from 'react-dom/client';
// import AboutPageContent from './about/Aboutpage';
import AboutPageContent from './components/About';
import App from './App';
import Login from './components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import SearchList from './components/SearchList';
import { AuthProvider } from './Hook/AuthContext';

// import { GlobalStyle } from './App/homeComponents/globalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <AboutPageContent />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/search',
    element: <SearchList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      {/* <GlobalStyle /> */}
    </AuthProvider>
  </React.StrictMode>
);
