import React from "react";
import './Footer.css';
import { useGetImg } from "../../hooks/useGetImg";
import { useGetAndSetData } from "../../hooks/useGetAndSetData";
import ImgService from "../../API/ImgService";
import { Container } from "react-bootstrap";


function Footer() {
    const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
    let logo = useGetImg('logo', Dataimg);
    return (
      <footer className="footer-container">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Логотип" />
          </div>
          <div className="footer-info">
            <p>Адрес: пр. Ленина 1, Кемерово, Россия</p>
            <p>Телефон: +7 (123) 456-7890</p>
            <p>Email: vicktoria.aura@mail.ru</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/about">О нас</a></li>
              <li><a href="/services">Услуги</a></li>
              <li><a href="/contact">Контакты</a></li>
            </ul>
            
          </div>
        </div>
        </Container>
        <div className="footer-bottom">
          <p>&copy; 2023 VICTORIA AURA. Все права защищены.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;