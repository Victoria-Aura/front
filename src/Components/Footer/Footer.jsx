import React from 'react';
import './Footer.css'; // Подключаем файл стилей
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import { useGetImg } from '../../hooks/useGetImg';
import ImgService from '../../API/ImgService';
import { Container } from 'react-bootstrap';

function Footer() {
    const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
    let vkLogo = useGetImg('vkLogo', Dataimg);
    let discordLogo = useGetImg('discordLogo', Dataimg);
    let ytLogo = useGetImg('ytLogo', Dataimg);
    let twitchLogo = useGetImg('twitchLogo', Dataimg);
  return (
    
    <footer className="footer-container">
      
      <div className='footer-links'>
          <a href='https://vk.com/viaura' className='footerLinksNoLast' target='_blank' rel='noreferrer'><img src={vkLogo} alt="" className='contactLogos'/></a>
          <a href='https://discord.gg/H4xZ2bHEAm' className='footerLinksNoLast' target='_blank' rel='noreferrer'><img src={discordLogo} alt="" className='contactLogos'/></a>
          <a href='https://www.youtube.com/channel/UCeXVLLrnP_kdEMgKUtOnP5w' className='footerLinksNoLast' target='_blank' rel='noreferrer'><img src={ytLogo} alt="" className='contactLogos'/></a>
          <a href='https://www.twitch.tv/victory_aura_ru' target='_blank' rel='noreferrer'><img src={twitchLogo} alt="" className='contactLogos'/></a>
        </div>

        <div className="footer-info">
          <p>Адрес: Ленина 1, Кемерово, Кемеровская область - Кузбасс , Россия</p>
          <p>Телефон: +7 (123) 456-7890</p>
          <p>Email: victory.aura@mail.ru</p>
        </div>
        
        
      <div className="footer-bottom">
        <p>&copy; 2023 Victory Aura. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;