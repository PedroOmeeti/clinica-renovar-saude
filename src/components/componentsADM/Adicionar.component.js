import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';

const AdicionarComponent = () => {
  const [cpf, setCpf] = useState('');
  const [convenio, setConvenio] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [celular, setCelular] = useState('');
  const [deficiente, setDeficiente] = useState(false);

  const handleCadastro = (e) => {
    e.preventDefault();

    // Aqui você pode enviar os dados do paciente para o backend ou fazer qualquer outra ação necessária

    // Limpa os campos do formulário
    setCpf('');
    setConvenio('');
    setNome('');
    setDataNascimento('');
    setCelular('');
    setDeficiente(false);
  };

  return (
    <Container>
      
      <h2>Cadastro de Paciente</h2>
      <Form onSubmit={handleCadastro}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="cpf">CPF:</Label>
              <Input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="convenio">Convênio:</Label>
              <Input type="text" id="convenio" value={convenio} onChange={(e) => setConvenio(e.target.value)} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="nome">Nome:</Label>
              <Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="dataNascimento">Data de Nascimento:</Label>
              <Input type="date" id="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="celular">Celular:</Label>
          <Input type="text" id="celular" value={celular} onChange={(e) => setCelular(e.target.value)} />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" checked={deficiente} onChange={(e) => setDeficiente(e.target.checked)} />{' '}
            Pessoa com Deficiência
          </Label>
        </FormGroup>
        <Button color="primary" type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default AdicionarComponent;
