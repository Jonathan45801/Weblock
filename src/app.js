import React,{Component} from 'react';
import {render} from 'react-dom';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import styled, {createGlobalStyle} from 'styled-components';
import gambarlog from './asset/gambar/BFC-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const LogoImage = styled.img`
height:50px;
width:85px;
margin-left:30px
`;

class app extends Component
{
    render()
    {
    return(        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand><a href="#home"><LogoImage src={gambarlog} alternate="Logo" ></LogoImage></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
          <Nav.Link  className = "nav-links" href="#features">Features</Nav.Link>
            <Nav.Link className = "nav-links" href="#pricing">Blog</Nav.Link> 
            <Nav.Link className = "nav-links" href="#deets">WhitePaper</Nav.Link>
            <Nav.Link className = "nav-links" href="#deets">Transparency</Nav.Link>
            <Nav.Link className = "nav-links" href="#deets">Roadmap</Nav.Link>
            <Nav.Link className = "nav-links" href="#deets">Tokenomic</Nav.Link>
            <Nav.Link className= "nav-links" href="#deets">News</Nav.Link>
            <Nav.Link className = "nav-links" href="#deets">FAQ</Nav.Link>
            <Nav.Link className = "nav-links" href="#deets">Terms</Nav.Link>
            <Nav.Link><Button variant="success">Login</Button></Nav.Link>
            <Nav.Link><Button variant="success">Register</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>  
    )}
}

render(React.createElement(app), document.getElementById('idtest'));