import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaRegUser } from "react-icons/fa";
import ItemForm from './ItemForm';
import { FaUserAlt } from "react-icons/fa";
import './ModalLogin.components.css'

function ModalLogin(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <a className='nav-link text-white' color="danger" onClick={toggle}>
        <FaRegUser />
      </a>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle} className='text-center'><FaUserAlt /> Login</ModalHeader>
        <ModalBody>
        <ItemForm
              label="Email"
              name="email"
              type="email"
              ph="Digite seu email"
            />
            <ItemForm
              label="Senha"
              name="senha"
              type="password"
              ph="Digite sua senha"
            />
            <a href="#" className='nav-link text-secondary'>Esqueci minha senha</a>
        </ModalBody>
        <ModalFooter className='d-flex justify-content-between'>
          <a className='text-dark' color='' onClick={toggle}>
            Não tenho conta
          </a>{' '}
          <Button className='secondary text-white' color="white" onClick={toggle}>
            Enviar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLogin;