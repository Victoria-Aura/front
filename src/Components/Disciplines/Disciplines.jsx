import { Container, Row, Col } from 'react-bootstrap';
import './Disciplines.css';
import List from '../UI/List/List';
import { useGetAndSetData } from '../../hooks/useGetAndSetData';
import GameDisciplineService from '../../API/GameDisciplineService';
import MidItemList from '../UI/Item/MidItemList';

function Disciplines() {
  const [DataDisp,setDisp,isLoading,Err] = useGetAndSetData(GameDisciplineService.getGameDiscipline)

 return (
    <div style={{backgroundColor: '#2b2a2f',color:'white',fontFamily:'Bahnschrift',textAlign:'center',padding:'2%'}}>
        <h1 style={{color: '#da3f3e',textShadow: '1px 1px 1px #fbf5db',fontSize:'400%'}}>ДИСЦИПЛИНЫ</h1>
        <h2>Victoria Aura предоставляет возможность участвовать в турнирах/чемпионатах по следующим дисциплинам:</h2>
        <Container>
        <Row>
          <List posts={DataDisp} ElemPost={MidItemList} orientation='horizontal'/>
        </Row>
      </Container>
    </div>
  );
}

export default Disciplines ;