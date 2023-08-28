import React from 'react';
import { Navbar,Nav,Button,Container } from 'react-bootstrap';
import './NavPanel.css';





export const NavPanel = () => {
    return (
    //     <Navbar className="nav">
    //         {/* <div>
    //             <img src='./lillogo.png' alt='' className='logo' />    
    //         </div> */}
    //     <Nav.Link href="#home">
    //         <div className='brand'>VICTORIA AURA</div>
    //     </Nav.Link>
    //     <Navbar.Toggle />
    //     <Nav.Link href="#home" className="homeBtn">
    //     Главная
    //     </Nav.Link>
    //     <Nav.Link href="#news" className="newsBtn">
    //     Новости
    //     </Nav.Link>
    //     <Nav.Link href="#aboutUs" className="aboutUsBtn">
    //     О нас
    //     </Nav.Link>
    //     <Navbar.Collapse className="justify-content-end">
            
            
    //         <Button variant="secondary" className="logInBtn">
    //         Авторизация
    //         </Button>
    //         <Button variant="danger" className="signInBtn">
    //         Регистрация
    //         </Button>
          
    //     </Navbar.Collapse>
    <Navbar id='TopAppBar' collapseOnSelect expand="lg" className="nav visible" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">VICTORIA AURA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Главная</Nav.Link>
            <Nav.Link href="#pricing">Новости</Nav.Link>
            <Nav.Link href="#pricing">О нас</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="secondary" style={{margin:'5px'}}>Авторизация</Button>
            <Button variant="outline-danger" style={{margin:'5px'}}>Регистрация</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};