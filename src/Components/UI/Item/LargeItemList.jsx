import React from 'react';
import './Items.css';


const LargeItemList = ({post}) => { 
    return (
        <div className='post large-post' >
            <div className='m-container'>
                <img src={post.img.file} alt="" style={{height: '420px',width:'100%',borderRadius:'5px'}} />
                <p className='post-text large-post-text' style={{bottom:'35px'}}>{post.short_text}</p>
                <p className='post-text large-post-text text-second'>{post.date}</p>
            </div> 
        </div>
    );
};

export default LargeItemList;