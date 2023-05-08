import React from 'react'
import { StyledButton, StyledHeader } from '../../App/homeComponents/homeStyle'
import iconAbout from '../../App/assets/iconAbout.svg';
import iconUser from '../../App/assets/iconUser.svg';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
        <StyledHeader>
            <Link to='/'> 
                <p>
                hashtag<strong>finder</strong>
                </p>
            </Link>

            <div>
            <StyledButton backgroundColor='#72EFDB' color='#0a1744'>
                <Link to='/about'>
                    <img className='iconHeader' src={iconAbout} alt='ícone Sobre' />
                    Sobre
                </Link>
            </StyledButton>
            <StyledButton>
                <Link to='/login'>
                    <img className='iconHeader' src={iconUser} alt='ícone Login' />
                    Login
                </Link>
            </StyledButton>
            </div>
        </StyledHeader>
    </>
  )
}
