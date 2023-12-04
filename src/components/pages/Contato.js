import { Button, Col, Container, Row } from "reactstrap";
import ItemForm from "../ItemForm";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookSquare, FaHandHoldingMedical, FaMapMarkerAlt } from "react-icons/fa";
import "../Contato.components.css";

function Contato() {
  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col className="text-center">
            <h1 className="display-4">Fale Conosco</h1>

            <p>Queremos saber a sua opinião, sugestão, dúvida ou elogio sobre o nosso trabalho. Por favor, preencha o formulário abaixo e deixe sua mensagem. Em breve, entraremos em contato com você.</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <ItemForm
              label="Nome"
              name="nome"
              type="text"
              ph="Digite seu nome"
            />
            <ItemForm
              label="Email"
              name="email"
              type="email"
              ph="Digite seu email"
            />
            <ItemForm
              label="Telefone"
              name="telefone"
              type="tel"
              ph="Digite seu telefone"
            />
            <ItemForm
              label="Assunto"
              name="assunto"
              type="text"
              ph="Informe o assunto da sua mensagem"
            />
            <ItemForm
              label="Mensagem"
              name="mensagem"
              type="textarea"
              ph="Digite a mensagem a ser encaminhada para nossa equipe."
            />
            <Button color="primary" block>
              Enviar
            </Button>
          </Col>
          <Col>
            <h2>Informações</h2>
            <p>
              <p className="h5">Telefone</p>
            </p>
            <p><FaPhoneAlt /> (12) 4657-2311</p>
            <hr />
            <p className="h5">Whatsapp</p>
            <p><FaWhatsapp /> (12) 99786-5543</p>
            <hr />
            <p className="h5">E-mail</p>
            <p><FaEnvelope /> clinicarenovar@gmail.com</p>
            <hr />
            <p className="h4">Nos siga nas redes sociais</p>
            <a className="fs-1"><FaInstagram className="p-0" /></a>
            <a className="fs-1"><FaFacebookSquare className="p-0 ms-2" /></a>
          </Col>
        </Row>
      </Container>
      <Container fluid className="Background-Conteudo text-white">
        <Container>
          <Row>
            <Col>
                <p className="text-center fs-1"><FaHandHoldingMedical /></p>
                <p className="h5">Clinica Renovar Saude Centro</p>
                <p><FaMapMarkerAlt /> R. Estela, 116 - Centro, pindamonhangaba - SP, 12404-200</p>
                <p><FaPhoneAlt /> (12) 8547-3322</p>
                <hr />
                <p className="h5">Clinica Renovar Saude Crispim</p>
                <p><FaMapMarkerAlt /> Av. dos Autonomistas, 896, Crispim, pindamonhangaba - SP, 12404-372</p>
                <p><FaPhoneAlt /> (12) 4002-8922</p>
                <hr />
                <p className="h5">Clinica Renovar Saude Crispim</p>
                <p><FaMapMarkerAlt /> Av. dos Autonomistas, 896, Crispim, pindamonhangaba - SP, 12404-372</p>
                <p><FaPhoneAlt /> (12) 4002-8922</p>
                <hr />
            </Col>
            <Col>
              <div className="mapouter">
                  <div className="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=pindamonhangaba, centro&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                  
                    <a href="https://2yu.co">2yu</a>
                    <br/>
                    <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
                  </div>
                </div>
              </Col>
          </Row>
          </Container>
        </Container>
    </div>
  );
}

export default Contato;
