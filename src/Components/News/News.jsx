import React from 'react';
import List from '../UI/List/List';
import './News.css'
import { Container,Stack,Button } from 'react-bootstrap';
const News = ({posts}) => {
    return (
        <div className='root'>
            <Container>
                <Stack direction="horizontal" gap={3}>
                    <h1 className='text p-2'>Новости</h1>
                    <Button className='ms-auto' variant="danger">Больше</Button>    
                </Stack>
                <List posts={posts}/>
            </Container>
        </div>
    );
};

export default News;