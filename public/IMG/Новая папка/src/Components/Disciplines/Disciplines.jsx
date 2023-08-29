import { Container, Row, Col } from 'react-bootstrap';
import './Disciplines.css';


function Disciplines() {
  return (
    <div className='disciplines'>
        <div className='disciplinesTxt'>ДИСЦИПЛИНЫ</div>
        <div className='dis'>
            <div className='lildistxt'>
            Victoria Aura предоставляет возможность участвовать в турнирах/чемпионатах по следующим дисциплинам:
            </div>
            <Container className='disc'>
                <Row style={{marginTop:"20%"}}>
                    <Col>
                        <a href='#VALORANT' className='game'>
                            <img src='./IMG/VALORANT.webp' alt=''/>
                            <div className='gameName'>VALORANT</div>
                        </a>
                    </Col>
                    
                    <Col>
                        <a href='#CS2' className='game'>
                            <img src='./IMG/CS2.webp' alt=''/>
                            <div className='gameName'>CS2</div>
                        </a>
                    </Col>
                    <Col>
                        <a href='#LOL' className='game'>
                            <img src='./IMG/LOL.png' alt='' />
                            <div className='gameName'>LEAGUE OF LEGENDS</div>
                        </a>
                    </Col>
                    <Col>
                        <a href='#DOTA2' className='game'>
                            <img src='./IMG/DOTA2.jpg' alt='' />
                            <div className='gameName'>DOTA 2</div>
                        </a>
                    </Col>
                    
                
                </Row>
            </Container>
        </div>
        
    </div>
  );
}

export { Disciplines };