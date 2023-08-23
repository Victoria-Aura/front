import React from 'react';
import './Items.css';



const ItemList = ({post}) => {
    return (
        <div className='post'>
            <div>
                <p className='post-text'>{post.short_text}</p>
                <p className='post-text' style={{opacity: '.3'}}>{post.date}</p>
            </div>
            <img src={post.img} className='post-img'/>
        </div>
    );
};

export default ItemList;