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
            <div className="aboutUsDiv">
                <img src={logo} alt="" className="aboutUsLogo"/>
            </div>
        }
        
    </div>
    );
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
};

export default AboutUs;