import React from 'react';
import './Items.css';


const LargeItemList = ({post}) => { 
    return (
        <div className='post large-post' style={{backgroundImage: `url(${post.img})`}}>
            <div>
                <p className='post-text'>{post.short_text}</p>
                <p className='post-text' style={{opacity: '.3'}}>{post.date}</p>
            </div>
        </div>
    );
};

export default LargeItemList;