import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Homepage.css';
import  Profilepage from './Profilepage';
import './profile.css';
import Sidenav from './Sidenav'
const Profile = () => {
  return (
    <Container fluid>
         <Row>
            <Col lg={2}>
              <Sidenav/> 
            </Col>
            <Col lg={10} className='navlineprofile'>
               <Row>
                  <Col lg={1}></Col>
                  <Col lg={10}><Profilepage/></Col>
                  <Col lg={1}></Col>
               </Row>
                
            </Col>
         </Row>
    </Container>
  )
}

export default Profile