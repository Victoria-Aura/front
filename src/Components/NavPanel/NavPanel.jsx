import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import './NavPanel.css';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';


export const NavPanel = () => {
    return (
    <Navbar id='TopAppBar' collapseOnSelect expand="lg" className="nav visible" variant='dark' bg='dark'>
        <LinkContainer to="/" style={{marginLeft:"2%"}}>
          <Navbar.Brand href="#home" >VICTORIA AURA</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link  >Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/News">
              <Nav.Link  >Новости
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Tournaments">
              <Nav.Link  >Турниры</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AboutUs">
              <Nav.Link  >О нас</Nav.Link>
            </LinkContainer>
            

          </Nav>
          <Nav style={{paddingRight:"2%"}}>
            <Button variant="secondary" className='logInBtn'>Авторизация</Button>
            <Button variant="danger" className='signInBtn'>Регистрация</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};