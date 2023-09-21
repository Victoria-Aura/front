import React from "react";
import ImgService from '../../API/ImgService';
import Loader from '../UI/Loader/Loader';
import './AboutUs.css';
import { useGetAndSetData } from "../../hooks/useGetAndSetData";
import { useGetImg } from "../../hooks/useGetImg";


const AboutUs = () => {
    const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
    let logo = useGetImg('logo', Dataimg);
    return (<div>
        {isLoading
            ? <div className='brand1' >
                <Loader style={{marginTop:300}}></Loader>
            </div>
            :
            <div>
                <div className="aboutUsDiv">
                    <img src={logo} alt="" className="aboutUsLogo"/>
                    <div className="aboutUsText">
                        <h1 className="headAboutUs">VICTORY AURA</h1>
                        <h2 className="aboutUsDiscription ">Российский турнирный оператор, созданный для развития киберспорта в России и СНГ. Наша организация основана в 2023 году простыми игроками, чьи глаза горели при мысли о компьютерных играх. Их личный опыт, а также опыт людей, приближенных к киберспортивным сценам различных дисциплин, помог создать организацию, которая проводит киберспортивные чемпионаты в самых популярных компьютерных дисциплинах.</h2>
                    </div>
                </div>

                <div className="aboutUsContacts">
                    <h1 className="head1AboutUs">НАШИ КОНТАКТЫ</h1>
                </div>
            </div>
            
        }
        
    </div>
    );
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
};

export default AboutUs;