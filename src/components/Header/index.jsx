import React from "react";
import { Link } from "react-router-dom";
import { StyledButton, StyledHeader } from "../Home/styled";
import iconAbout from "../../assets/img/iconAbout.svg";
import iconUser from "../../assets/img/iconUser.svg";
import iconHome from "../../assets/img/iconHome.svg";


export default function Header() {  

  return (
    <>
      <StyledHeader>
        <Link to="/">
          <p>
            hashtag<strong>finder</strong>
          </p>
        </Link>
        <div>
          <Link to="/about">  
            {
              window.location.pathname !== '/login' &&
              window.location.pathname !== '/search' ? 
              <StyledButton backgroundColor="#72EFDB" color="#0a1744">
                <img className="iconHeader" src={iconAbout} alt="ícone Sobre" />
                  Sobre            
              </StyledButton> : ''
            }        
              
          </Link>
          <Link to="/login">
            { 
              window.location.pathname !== '/login' &&
              window.location.pathname !== '/search' ?
              <StyledButton>            
                <img className="iconHeader" src={iconUser} alt="ícone Login" />
                  Login            
              </StyledButton> : ''
            }
          </Link>            
          <Link to="/">
            {
              window.location.pathname === '/' || 
              window.location.pathname === '/about' ?  '' :
              <StyledButton backgroundColor="#72EFDB" color="#0a1744" >
                <img className="iconHeader" src={iconHome} alt="ícone Home" />
                  Home
              </StyledButton>  
            }
          </Link>
        </div>
      </StyledHeader>
    </>
  );
}
