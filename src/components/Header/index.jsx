import React from "react";
import { Link } from "react-router-dom";
import { StyledButton, StyledHeader } from "../Home/styled";
import iconAbout from "../../assets/img/iconAbout.svg";
import iconUser from "../../assets/img/iconUser.svg";
import iconHome from "../../assets/img/iconHome.svg";
import iconOff from "../../assets/img/iconOff.svg";

export default function Header() {  
  const currentPath = window.location.pathname;

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
            {currentPath !== "/login" && currentPath !== "/search" && (
              <StyledButton backgroundColor="#72EFDB" color="#0a1744">
                <img className="iconHeader" src={iconAbout} alt="ícone Sobre" />
                  SOBRE            
              </StyledButton> 
            )}        
          </Link>
          <Link to="/login">
            {currentPath !== "/login" && currentPath !== "/search" && (
              <StyledButton>            
                <img className="iconHeader" src={iconUser} alt="ícone Login" />
                  LOGIN            
              </StyledButton> 
            )}
          </Link>            
          <Link to="/">
            {currentPath === "/" || currentPath === "/about" ? null : (
              <StyledButton backgroundColor="#72EFDB" color="#0a1744" >
                <img className="iconHeader" src={iconHome} alt="ícone Home" />
                  HOME
              </StyledButton>  
            )}
          </Link>
          <Link to='/login'>
            {currentPath === "/" || currentPath === "/about" || currentPath === "/login" ? null : (
              <StyledButton>
                <img className="iconHeader" src={iconOff} alt="ícone Home" />
                  SAIR
              </StyledButton>  
            )}
          </Link>
        </div>
      </StyledHeader>
    </>
  );
}
