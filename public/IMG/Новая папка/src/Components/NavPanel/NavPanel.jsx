import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './NavPanel.css';





const NavPanel = () => {
    return (
        <Navbar className="nav">
            {/* <div>
                <img src='./lillogo.png' alt='' className='logo' />    
            </div> */}
        <Nav.Link href="#home">
            <div className='brand'>VICTORIA AURA</div>
        </Nav.Link>
        <Navbar.Toggle />
        <Nav.Link href="#home" className="homeBtn">
        Главная
        </Nav.Link>
        <Nav.Link href="#news" className="newsBtn">
        Новости
        </Nav.Link>
        <Nav.Link href="#aboutUs" className="aboutUsBtn">
        О нас
        </Nav.Link>
        <Navbar.Collapse className="justify-content-end">
            
            
            <Button variant="secondary" className="logInBtn">
            Авторизация
            </Button>
            <Button variant="danger" className="signInBtn">
            Регистрация
            </Button>
          
        </Navbar.Collapse>
    </Navbar>

    );
};

export { NavPanel };