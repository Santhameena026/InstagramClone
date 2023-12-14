import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './Form';
import './Form.css';

const Signup = () => {
  return (
   <Container>
    <Row>
        <Col lg={4}>
           
        </Col>
        <Col lg={4} className='d-flex justify-content-center'>
           <Form/>
        </Col>
           
        <Col lg={4}>
        
        </Col>
    </Row>
   </Container>
  )
}

export default Signup