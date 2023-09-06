// import {  Col, Container, Row } from 'react-bootstrap';
// import './AboutUs.css';
// import { Nav } from 'react-bootstrap';
// import { useGetAndSetData } from '../../hooks/useGetAndSetData';
// import ImgService from '../../API/ImgService';

// const AboutUs = () => {
//     const [Dataimg,setimg,isLoading,Err] = useGetAndSetData(ImgService.getMainImg)
//     let logo = ''
//     Dataimg.forEach(data => {
//         if(data.name === 'logo'){
//             logo = data.file
//         }
//     })
//     return(
//         <div className='AboutUs'>

//                 <h1 className='Whoweare'>МЫ - VICTORIA AURA</h1>
//                 <Row>
//                     <Col style={{width:"50%"}}>
//                         <h2 className='Discription'>Victoria Aura - организация, созданная в 2023 году для проведения киберспортивных мероприятий и турниров/чемпионатов различных масштабов. </h2>
//                     </Col>
//                     <Col style={{width:"50%"}}>
//                         <img src={logo} alt='' className='AboutUsLogo'/>
//                     </Col>
//                 </Row>
//         </div>
//     );  
// };


// export { AboutUs };

import React from 'react';
import './AboutUs.css'; // Подключаем файл стилей

function AboutUs() {
    return (
      <div className="about-container">
        <div className="about-header">
          <h1>О нашей организации</h1>
        </div>
        <div className="about-content">
          <p>
            Добро пожаловать в организацию "Название вашей организации"! Мы являемся лидерами в области проведения киберспортивных соревнований и событий.
          </p>
          <p>
            Наша миссия - способствовать развитию и продвижению киберспорта как увлекательной и конкурентной дисциплины. Мы организуем турниры, мероприятия и лагеря для геймеров всех уровней и возрастов.
          </p>
          <p>
            Мы гордимся нашим опытом и профессиональной командой, которая работает над созданием незабываемых моментов в мире киберспорта. Наша цель - поддержать и вдохновить будущее поколение геймеров.
          </p>
        </div>
      </div>
    );
  }

export { AboutUs };