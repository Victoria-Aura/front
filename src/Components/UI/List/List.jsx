import React from 'react';
import ItemList from '../Item/ItemList';
import LargeItemList from '../Item/LargeItemList';
import { Row,Col,Container } from 'react-bootstrap';

const List = ({posts}) => {
    const results = [];
    const firstPost = posts.at(0)
    let ElemFirstPost = < div/>

    posts.forEach(post => {
        if (firstPost.id != post.id){results.push(<ItemList post={post} key={post.id}/>)} 
        else{ElemFirstPost = <LargeItemList post={post} />}
      })
      
    return (
        <Row>
            {posts.length <= 1
            ? (<> <Col style={{marginBottom: '15px'}}>{ElemFirstPost}</Col></>)
            : (<>
                <Col md={7} style={{marginBottom: '15px'}}>{ElemFirstPost}</Col>
                <Col md={5} >{results}</Col>
            </>)
            }
        </Row>
    );
};

export default List;