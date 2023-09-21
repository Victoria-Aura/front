import { Container, Row, Col } from 'react-bootstrap';
import './Disciplines.css';
import List from '../UI/List/List';
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import GameDisciplineService from '../../API/GameDisciplineService';
import MidItemList from '../UI/Item/MidItemList';
import Loader from '../UI/Loader/Loader';
import { useGetImg } from '../../hooks/useGetImg';
import ImgService from '../../API/ImgService';
import React from 'react';




const Disciplines = () => {
  const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
     let valorant = useGetImg('valorant', Dataimg);
     let LOL = useGetImg('LOL', Dataimg);
      let cs2 = useGetImg('cs2', Dataimg);
      let dota2 = useGetImg('dota2', Dataimg);
    return (
      <div>
               {isLoading
               ? <Loader style={{marginTop:150}}></Loader>
               : <>
             <h1 className='disciplinesHeader'>ДИСЦИПЛИНЫ</h1>
             <h2 className='disciplinesHeader2'>Victory Aura предоставляет возможность участвовать в турнирах/чемпионатах по следующим дисциплинам:</h2>
             <div style={{paddingBottom:"20%"}}>
                <Row className='disciplinesRow'>
                
                <Col>
                   <div href='/valorant'  className='disciplinesBackItem'>
                     <a href='/tournaments/valorant' ><img src={valorant} alt='' className="disciplinesIcon"></img></a>
                     <h1 className='disciplinesName'>VALORANT</h1>
                   </div>
                 </Col>
                 <Col>

                   <div href='/lol' className='disciplinesBackItem'>
                    
                     <a href='/tournaments/lol' ><img src={LOL} alt='' className="disciplinesIcon"></img></a>
                     <h1 className='disciplinesName'>LOL</h1>

                   </div>

                 </Col>

                 <Col>

                 <div href='/cs2' className='disciplinesBackItem'>
                    
                     <a href='/tournaments/cs2' ><img src={cs2} alt='' className="disciplinesIcon"></img></a>
                     <h1 className='disciplinesName'>CS2</h1>

                   </div>

                 </Col>
                 <Col>
                  
                 <div href='/dota' className='disciplinesBackItem'>
                    
                     <a href='/tournaments/dota2' ><img src={dota2} alt='' className="disciplinesIcon"></img></a>
                     <h1 className='disciplinesName'>DOTA2</h1>

                   </div>

                 </Col>
                
               </Row>
             </div>
           </>

              
}
</div>
    )
}

export default Disciplines ;