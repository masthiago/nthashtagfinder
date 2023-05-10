<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, StyledHeader } from '../Home/styled';
import iconAbout from '../../assets/img/iconAbout.svg';
import iconUser from '../../assets/img/iconUser.svg';
import iconHome from '../../assets/img/iconHome.svg';
=======
import React from "react";
import { Link } from "react-router-dom";
import { StyledButton, StyledHeader } from "../Header/styled";
import iconAbout from "../../assets/img/iconAbout.svg";
import iconUser from "../../assets/img/iconUser.svg";
import iconHome from "../../assets/img/iconHome.svg";
import iconOff from "../../assets/img/iconOff.svg";
>>>>>>> f4e2b0ef1c408f7e9f972466601bf448268db12a

export default function Header() {
  const currentPath = window.location.pathname;

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
                S O B R E
              </StyledButton>
            )}
          </Link>
          <Link to='/login'>
            {currentPath !== '/login' && currentPath !== '/search' && (
              <StyledButton>
                <img className='iconHeader' src={iconUser} alt='ícone Login' />L
                O G I N
              </StyledButton>
            )}
          </Link>
          <Link to='/'>
            {currentPath === '/' || currentPath === '/about' ? null : (
              <StyledButton backgroundColor='#72EFDB' color='#0a1744'>
                <img className='iconHeader' src={iconHome} alt='ícone Home' />
                Home
              </StyledButton>
            )}
          </Link>
        </div>
      </StyledHeader>
    </>
  );
}
