import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import './NavPanel.css';
import { LinkContainer } from 'react-router-bootstrap'


export const NavPanel = () => {
    return (
    <Navbar id='TopAppBar' collapseOnSelect expand="lg" className="nav visible" variant='dark' bg='dark'>
        <LinkContainer to="/" style={{marginLeft:"2%"}}>
          <Navbar.Brand href="#home" >VICTORY AURA</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link  className='navBtn'>Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/News">
              <Nav.Link  className='navBtn'>Новости</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Tournaments">
              <Nav.Link  className='navBtn'>Турниры</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AboutUs">
              <Nav.Link  className='navBtn'>О нас</Nav.Link>
            </LinkContainer>
            

          </Nav>
          <Nav style={{paddingRight:"2%"}}>
            <Button variant="secondary" id='logIn' className='logInBtn' >Авторизация</Button>
            <Button variant="danger" id='logIn' className='signInBtn' >Регистрация</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};