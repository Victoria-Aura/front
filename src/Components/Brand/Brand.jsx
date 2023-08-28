import ImgService from '../../API/ImgService';

import './Brand.css'

import React from 'react';

const Brand = () => {
    return (
        <div className='brand1' >
            <img src='./logo.png' alt='' className='logo1'/>
            <div className='brandAbout1'>ЛЮБИТЕЛЬСКИЕ И ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ</div>
            <div className='brandName'>VICTORIA AURA</div>
            <div className='brandAbout2'>ОТ ГЕЙМЕРОВ ДЛЯ ГЕЙМЕРОВ</div>
        </div>
    );
};

export default Brand;