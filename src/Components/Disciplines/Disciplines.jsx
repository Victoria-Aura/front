import { Container, Row, Col } from 'react-bootstrap';
import './Disciplines.css';
import List from '../UI/List/List';
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import GameDisciplineService from '../../API/GameDisciplineService';
import MidItemList from '../UI/Item/MidItemList';
import Loader from '../UI/Loader/Loader';
import { useGetImg } from '../../hooks/useGetImg';
import ImgService from '../../API/ImgService';

function Disciplines() {
  const [Dataimg, setimg, isLoading, Err] = useGetAndSetData(ImgService.getMainImg);
    let valorant = useGetImg('valorant', Dataimg);
    let LOL = useGetImg('LOL', Dataimg);
    let cs2 = useGetImg('cs2', Dataimg);
    let dota2 = useGetImg('dota2', Dataimg);
  
 return (
  
    <div style={{backgroundColor: '#2b2a2f',color:'white',fontFamily:'Bahnschrift',textAlign:'center',padding:'2%'}}>
        {isLoading
          ?<Loader></Loader>
        
          :<>
            <h1 style={{color: '#da3f3e',textShadow: '1px 1px 1px #fbf5db',fontSize:'8vw'}}>ДИСЦИПЛИНЫ</h1>
            <h2 style={{color:"#fbf5db", fontSize:"2vw"}}>Victoria Aura предоставляет возможность участвовать в турнирах/чемпионатах по следующим дисциплинам:</h2>
            <div style={{paddingBottom:"20%"}}>
              <Row style={{marginTop:"5%", marginBottom:"5%", marginLeft:"5%", objectPosition:"center"}}>
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
  );
}

export default Disciplines ;