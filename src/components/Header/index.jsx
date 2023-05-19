import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledButton, StyledHeader } from './styled';
import iconAbout from '../../assets/img/iconAbout.svg';
import iconUser from '../../assets/img/iconUser.svg';
import iconHome from '../../assets/img/iconHome.svg';
import iconOff from '../../assets/img/iconOff.svg';
import { AuthContext } from '../../Hook/AuthContext';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const { logout } = useContext(AuthContext); //exit search page

  return (
    <>
      <StyledHeader>
        <Link to='/'>
          <p>
            hashtag<span>finder</span>
          </p>
        </Link>
        <div>
          <Link to='/about'>
            {currentPath !== '/login' && currentPath !== '/search' && (
              <StyledButton backgroundColor='#72EFDB' color='#0a1744'>
                <img className='iconHeader' src={iconAbout} alt='ícone Sobre' />
                SOBRE
              </StyledButton>
            )}
          </Link>
          <Link to='/login'>
            {currentPath !== '/login' && currentPath !== '/search' && (
              <StyledButton>
                <img className='iconHeader' src={iconUser} alt='ícone Login' />
                LOGIN
              </StyledButton>
            )}
          </Link>
          <Link to='/'>
            {currentPath === '/' || currentPath === '/about' ? null : (
              <StyledButton backgroundColor='#72EFDB' color='#0a1744'>
                <img className='iconHeader' src={iconHome} alt='ícone Home' />
                HOME
              </StyledButton>
            )}
          </Link>
          <Link to='/login'>
            {currentPath === '/' ||
            currentPath === '/about' ||
            currentPath === '/login' ? null : (
              <StyledButton onClick={logout}>
                <img className='iconHeader' src={iconOff} alt='ícone Home' />
                SAIR
              </StyledButton>
            )}
          </Link>
        </div>
      </StyledHeader>
    </>
  );
}
