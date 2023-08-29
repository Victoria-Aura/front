import {  Container } from 'react-bootstrap';
import './AboutUs.css';
import { Nav } from 'react-bootstrap';
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import ImgService from '../../API/ImgService';

const AboutUs = () => {
    const [Dataimg,setimg,isLoading,Err] = useGetAndSetData(ImgService.getMainImg)
    let logo = ''
    Dataimg.forEach(data => {
        if(data.name === 'logo'){
            logo = data.file
        }
    })
    return(
        <div className='AboutUs'>

                <div className='Whoweare'>МЫ - VICTORIA AURA</div>
                <div className='description'>
                    <p className='descriptiontext'>
                    Наша организация, начавшая свой путь в 2023 году,<br />проводит киберспортивные турниры от любительского<br/>до профессионального уровня для игроков из стран СНГ<br/>(преимущественно РФ). Наш проект создан рядовыми<br/>игроками различных дисциплин для людей,<br/>которые мечтают выйти на профессиональную сцену.
                    </p>
                    <img src={logo} alt='' className='aboutUsIMG'/>
                </div>
                <Nav.Link href='#aboutUs' className='learnMore'>Подробнее</Nav.Link>
        </div>
    );
};

export { AboutUs };