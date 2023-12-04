import {
  Container,
  Col,
  Row,
} from "reactstrap";
import CarouselA from "../CarouselA";
import Infraestrutura from '../img/estrutura-clinica.jpg'
import '../Clinica.components.css'
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
          <img src={Infraestrutura} class="img-fluid Image-height d-block mx-auto my-5" alt="Infra estrutura da clínica" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="fs-4 text-center">Uma clínica boa</p>
          </Col>
          <Col className="fs-4 text-center">Uma ótima clínica</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Clinica;
