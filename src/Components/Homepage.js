import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Homepage.css';
import Sidenav from './Sidenav';
import Home from './Home';


const Homepage = () => {
  return (
    <Container fluid>
      <Row>
         <Col lg={2} className='navline'>
         <Sidenav/>
         </Col>
        <Col lg={10}>
         <Home/>
          
        </Col>
      </Row>
      
      
    </Container>
  )
}

export default Homepage