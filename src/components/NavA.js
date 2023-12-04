import { Link } from 'react-router-dom'
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Col,
} from 'reactstrap';
import { FaRegUser } from "react-icons/fa";
import './NavA.components.css'

function NavA() {
 

  return (
    <div>
      <Navbar expand="md">
        <Col>
          <Link className='navbar-brand' to="/">Clínica Renovar Saúde</Link>
        </Col>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className='nav-link' to="/">Clínica</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/Contato">Contato</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/Agende">Agende</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link LoginColor' to="/Login"><FaRegUser/></Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavA;