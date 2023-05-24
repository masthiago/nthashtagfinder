import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContext, AuthProvider } from './Hook/AuthContext';
import './index.css';
import App from './App';
import Login from './components/Login';
import SearchList from './components/SearchList';
import AboutPageContent from './components/About';

//rota privada para /search
function PrivateRoute({ children }) { 
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to='/login' replace /> //se logado vai para pagina de search se não volta pra /login 
}

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
  { //informar a rota privada 
    path: '/search',
    element: (
      <PrivateRoute> 
        <SearchList />,
      </PrivateRoute>
    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
