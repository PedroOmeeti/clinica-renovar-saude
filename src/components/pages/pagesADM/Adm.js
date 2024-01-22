import { useState } from 'react';
import { Col, Container, Row } from "reactstrap";
import Inicio from "../../componentsADM/Inicio";
import '../../componentsADM/Adm.components.css'
import Adicionar from '../../componentsADM/Adicionar';


function Adm() {

  const [Navegacao, setNavegacao] = useState('');

  const ResultadoNavegacao = (item) => {
    if (item === 'Horarios') {
      setNavegacao(Inicio);
    } else if (item === 'Adicionar') {
      setNavegacao(Adicionar)
    }
    
  }


  return(
    <Container>
      <Row>
        <Col className="col-1 listBackGround text-white">
          <button className="aperta nav-link py-1 ms-2" onClick={() =>ResultadoNavegacao('Horarios')}>Horarios</button>
          <button className="aperta nav-link py-1 ms-2" onClick={() => ResultadoNavegacao('Adicionar')}>Adicionar clientes</button>
        </Col>
        
        
        <Col className="Carlos">
          <div>{Navegacao}</div>
         
        </Col>
      </Row>
    </Container>
  )
}

export default Adm