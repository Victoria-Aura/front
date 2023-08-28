import React from 'react';
// import './Items.css';



const ItemList = ({post}) => {
    return (
        <div className='post post-mid mx-auto'>
            <img src={post.img.file} />
            <p style={{textAlign:'center'}}>{post.name}</p>
        </div>
    );
};

export default ItemList;