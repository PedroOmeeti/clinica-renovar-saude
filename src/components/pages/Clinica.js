import {
  Container,
  Col,
  Row,
  List
} from "reactstrap";
import CarouselA from "../CarouselA";
import Infraestrutura from '../img/estrutura-clinica.jpg'
// import Emojisorrindo from '../img/emojisorrindo.png'
import '../Clinica.components.css'
import { Link } from "react-router-dom";
function Clinica() {
  return (
    <div>
      <Row>
        <Col>
          <CarouselA />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="m-5">Cuidando do seu bem-estar com dedicação e expertise. </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="fs-4">Nossa equipe de profissionais altamente qualificados está comprometida em oferecer serviços de saúde abrangentes e personalizados. Desde consultas médicas até terapias alternativas, estamos aqui para ajudar você a renovar sua saúde e qualidade de vida. Venha nos visitar e descubra o caminho para uma vida mais saudável e feliz!</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <img src={Infraestrutura} className="img-fluid Image-height d-block mx-auto my-5" alt="Infra estrutura da clínica" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <List className="list-unstyled fs-4">
              <li>Psicologia</li>
              <li>Dermatologia</li>
              <li>Ortopedia</li>
            </List>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Link className='nav-link LoginColor fs-4 text-center p-3 bg-secondary rounded-4 my-3 text-white' to="/Contato">Onde estamos localizados</Link>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className="fs-4 text-center"> A Caralhões Clínica trás para sua empresa as soluções para a gestão e envio (mensageria) dos eventos de saúde e segurança do trabalho. Além disso, a clínica oferece serviços de odontologia personalizados para suas necessidades pessoais, executados com alta tecnologia. Entre em contato hoje mesmo para saber mais sobre os serviços da Clínica Renovar Saúde.</Col>
        </Row>
        
      </Container>
      
    </div>
  );
}

export default Clinica;
