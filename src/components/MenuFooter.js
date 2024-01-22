import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function MenuFooter(){
    return(
        <div className='text-center bg-secondary text-white p-3'>
                <Row>
                    <Col xs='6' className='align-items-center d-flex justify-content-end pe-5'><p>Clínica Renovar Saúde</p></Col>
                    <Col xs='3' className='column'>
                            <p><Link className='nav-link' to='/'>Clínica</Link></p>
                            <p><Link className='nav-link' to='/contato'>Contato</Link></p>
                            <p><Link className='nav-link' to='/agende'>Agende</Link></p>
                    </Col>
                    <Col xs='3' className='pe-5'>icones contato</Col>
                </Row>        
        </div> 
    )
}

export default MenuFooter;