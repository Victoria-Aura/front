import ImgService from '../../API/ImgService';
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import { useGetImg } from '../../hooks/useGetImg';

import './Brand.css'
import Loader from '../UI/Loader/Loader';
import React from 'react';


const Brand = () => {
    const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
    let bg = useGetImg('bg', Dataimg);
    let logo = useGetImg('logo', Dataimg);
    console.log(isLoading)
    return (<div>
        {isLoading
            ? <div className='brand1' >
                <Loader style={{marginTop:300}}></Loader>
            </div>
            :
            <div className='brand1' style={{ backgroundImage: `url(${bg})` }}>
                <img src={logo} alt='' style={{ marginTop: 50 }} className='logo' />
                <div className='brandAbout1'>ЛЮБИТЕЛЬСКИЕ И ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ</div>
                <h1 className='brandName'>VICTORIA AURA</h1>
                <div className='brandAbout2'>ОТ ГЕЙМЕРОВ ДЛЯ ГЕЙМЕРОВ</div>
            </div>
        }
        
    </div>
    );
};


export default Brand;