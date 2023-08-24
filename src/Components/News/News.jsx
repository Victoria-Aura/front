import React,{useState,useEffect} from 'react';
import List from '../UI/List/List';
import './News.css'
import { Container,Stack,Button } from 'react-bootstrap';


import NewsService from '../../API/NewsService';
import { useFetching } from '../../hooks/useFetching';


const News = () => {
    const [DataNews,setNews ] = useState([])
    const [ fetchingNews, isNewsLoading,Err] = useFetching(async () => {
      const data = await NewsService.getNews()
      setNews(data.data)
    })
    useEffect(()=>{
      fetchingNews()
    },[])
    return (
        <div className='root'>
            <Container>
                <Stack direction="horizontal" gap={3}>
                    <h1 className='text p-2'>Новости</h1>
                    <Button className='ms-auto' variant="danger">Больше</Button>    
                </Stack>
                <List posts={DataNews}/>
            </Container>
        </div>
    );
};

export default News;