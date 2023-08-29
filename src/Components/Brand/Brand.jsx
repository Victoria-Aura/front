import ImgService from '../../API/ImgService';
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import { useGetImg } from '../../hooks/useGetImg';

import './Brand.css'

import React from 'react';

const Brand = () => {
    const [Dataimg,setimg,isLoading,Err] = useGetAndSetData(ImgService.getMainImg);
    let bg = useGetImg('bg', Dataimg);
    let logo = useGetImg('logo', Dataimg);

    return (
        <div className='brand1' style={{background: `url(${bg})`}}>
            <img src={logo} alt='' className='logo'/>
            <div className='brandAbout1'>ЛЮБИТЕЛЬСКИЕ И ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ</div>
            <h1 className='brandName'>VICTORIA AURA</h1>
            <div className='brandAbout2'>ОТ ГЕЙМЕРОВ ДЛЯ ГЕЙМЕРОВ</div>
        </div>
    );
};


export default Brand;