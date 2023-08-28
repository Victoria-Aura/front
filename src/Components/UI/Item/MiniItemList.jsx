import React from 'react';
// import './Items.css';



const MiniItemList = ({post}) => {
    return (
        <div className='post mini-post'>
            <div>
                <p className='mini-post-text'>{post.short_text}</p>
                <p className='mini-post-text text-second'>{post.date}</p>
            </div>
            <img src={post.img.file} className='mini-post-img'/>
        </div>
    );
};

export default MiniItemList;