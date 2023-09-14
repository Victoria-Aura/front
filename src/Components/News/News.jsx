import React from 'react';
import List from '../UI/List/List';
import './News.css'
import { Container,Stack,Button, Row,Col } from 'react-bootstrap';
import NewsService from '../../API/NewsService'


import Loader from '../UI/Loader/Loader';
import MiniItemList from '../UI/Item/MiniItemList';
import LargeItemList from '../UI/Item/LargeItemList';

import { useGetAndSetData } from '../../hooks/useGetAndSetData';

const News = () => {
    const [DataNews,setNews,isLoading,Err] = useGetAndSetData(NewsService.getNews)
 
    return (
        <div className='root'>
                {isLoading
                ? <Loader style={{marginTop:150}}></Loader>
                : 
                <Container style={{paddingBottom:"2%"}}>
                    <Stack direction="horizontal" gap={3}>
                        <h1 className='text p-2'>Новости</h1>
                        <Button className='ms-auto' variant="danger">Больше</Button>    
                    </Stack>
                    <Row>
                        <Col md={7} >
                            <List posts={DataNews.slice(0,1)} ElemPost={LargeItemList} />
                        </Col>
                        <Col md={5} >
                            <List posts={DataNews.slice(1)} ElemPost={MiniItemList} />
                        </Col>
                    </Row>
                </Container>
                }
            
        </div>
    );
};

export default News;