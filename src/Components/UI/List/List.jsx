import React from 'react';
import { Col } from 'react-bootstrap';

const List = ({posts,ElemPost,orientation='vertical'}) => {
    return (
        <>
            {orientation === 'vertical'
            ? 
            <>
                {posts.map(post => <ElemPost post={post} />)}
            </>
            :
            <>
            {posts.map(post => <Col ><ElemPost post={post} /></Col>)}
            </>
            }
        </>
    );
};

export default List;