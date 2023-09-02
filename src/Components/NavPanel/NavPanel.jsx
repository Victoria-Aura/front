import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import './NavPanel.css';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';


export const NavPanel = () => {
    return (
    <Navbar id='TopAppBar' collapseOnSelect expand="lg" className="nav visible" variant='dark' bg='dark'>
        <Navbar.Brand href="#home" style={{marginLeft:"2%"}}>VICTORIA AURA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link  >Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Home">
              <Nav.Link  >Главная</Nav.Link>
            </LinkContainer>
          </Nav>
          {/* <Nav style={{paddingRight:"2%"}}>
            <Button variant="secondary" className='logInBtn'>Авторизация</Button>
            <Button variant="danger" className='signInBtn'>Регистрация</Button>
          </Nav> */}
        </Navbar.Collapse>
    </Navbar>
    );
};