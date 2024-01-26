import {
  Container,
  Col,
  Row,
  List,
  Button
} from "reactstrap";
import AgendaHorarios from "./AgendaHorarios";

// import Emojisorrindo from '../img/emojisorrindo.png'
import '../Clinica.components.css'
import '../Contato.components.css'

function Inicio() {
  return(
    <div className="container-fluid p-0 fundoAgenda">
        <Row>
            <Col className="d-flex justify-content-center align-items-center h5"><p>Agenda - Dr. Estevão Rada</p></Col>
            <Col xs='2'><button className="bg-secondary m-2 btn">Lista de espera</button></Col>
            <Col xs='2'><button className="bg-secondary m-2 btn">Novo agendamento</button></Col>
        </Row>
        <Row>
            <Col xs='2'>
                <Container className="bg-white m-3">
                    <Row className="h5 bg-secondary text-white">
                        <p className="pt-3">Pacientes de hoje</p>
                    </Row>
                    <Row className="pb-2">
                        <p className="h6">09:00 - 09:30</p>
                        <p>Bruno Reis</p>
                        <hr/>
                        <p className="h6">09:30 - 10:00</p>
                        <p>Juliano Alberto</p>
                        <hr/>
                        <p className="h6">10:00 - 10:30</p>
                        <p>Fernando Barros</p>
                        <hr/>
                        <p className="h6">11:00 - 11:30</p>
                        <p>Renata Nascimento</p>
                        <hr/>
                        <p className="h6">13:30 - 14:00</p>
                        <p>André Silva</p>
                        <hr/>
                        <p className="h6">15:00 - 16:00</p>
                        <p>João Camargo</p>
                    </Row>
                </Container>
            </Col>
            <Col>
                <Container className="bg-white mt-3">
                    <AgendaHorarios />
                </Container>
            </Col>
        </Row>
    </div>
  )
}

export default Inicio