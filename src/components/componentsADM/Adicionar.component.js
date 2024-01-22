import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AdicionarComponent = () => {
  const [cpf, setCpf] = useState('');
  const [convenio, setConvenio] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [deficiente, setDeficiente] = useState(false);

  const handleCadastro = (e) => {
    e.preventDefault();

    // Aqui você pode enviar os dados do paciente para o backend ou fazer qualquer outra ação necessária

    // Limpa os campos do formulário
    setCpf('');
    setConvenio('');
    setNome('');
    setDataNascimento('');
    setEspecialidade('');
    setDeficiente(false);
  };

  return (
    <div className="container">
      <h2>Cadastro de Paciente</h2>
      <Form onSubmit={handleCadastro}>
        <FormGroup>
          <Label for="cpf">CPF:</Label>
          <Input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="convenio">Convênio:</Label>
          <Input type="text" id="convenio" value={convenio} onChange={(e) => setConvenio(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome:</Label>
          <Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="dataNascimento">Data de Nascimento:</Label>
          <Input type="date" id="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="especialidade">Especialidade:</Label>
          <Input type="text" id="especialidade" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" checked={deficiente} onChange={(e) => setDeficiente(e.target.checked)} />{' '}
            Pessoa com Deficiência
          </Label>
        </FormGroup>
        <Button color="primary" type="submit">Cadastrar</Button>
      </Form>
    </div>
  );
};

export default AdicionarComponent;
