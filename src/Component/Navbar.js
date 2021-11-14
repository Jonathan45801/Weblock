import React,{useState,useEffect} from 'react';
import {render} from 'react-dom';
import styled, {createGlobalStyle} from 'styled-components';
import gambarlog from './BFC-Logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks, NavBtnLink,
  NavBtn
} from './NavbarElements';
const LogoImage = styled.img`
height:60px;
width:95px;
`;


const NavBar1=({toggle})=>
{
  
    return(
        <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'><LogoImage src={gambarlog}></LogoImage></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>Whitepaper</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>Transparency</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>RoadMap</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>Tokenomics</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>FAQ</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>Term</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/login'>
            Login
            </NavBtnLink>
          <NavBtnLink to="/signin">
            Register
            </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}


export default NavBar1;