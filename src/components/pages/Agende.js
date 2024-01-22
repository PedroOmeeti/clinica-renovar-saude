import { Col, Container, Row} from "reactstrap";
import Agendamento from "../Agendamento";
function Agende() {
  return(
    <div>
      <Container>
        <Row className="">
          <Col className="text-center my-4">
            <h1>Agende a sua consulta</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Agendamento />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Agende