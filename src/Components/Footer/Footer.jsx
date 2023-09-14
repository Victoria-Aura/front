import React from 'react';
import './Footer.css'; // Подключаем файл стилей
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import { useGetImg } from '../../hooks/useGetImg';
import ImgService from '../../API/ImgService';

function Footer() {
    const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
    let logo = useGetImg('logo', Dataimg);
  return (
    
    <footer className="footer-container">
      {/* <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Логотип" />
        </div>
      </div> */}
        <div className="footer-info">
          <p>Адрес: Ленина 1, Кемерово, Кемеровская область - Кузбасс , Россия</p>
          <p>Телефон: +7 (123) 456-7890</p>
          <p>Email: vicktoria.aura@mail.ru</p>
        </div>
        <div className="footer-links">
          
            <a href="/" className='footerLinks'>Главная</a>
            <a href="/News" className='footerLinks'>Новости</a>
            <a href="/Tournaments" className='footerLinks'>Турниры</a>
            <a href="/AboutUs" className='footerLinks'>О нас</a>
          
        </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Victoria Aura. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;