import React from 'react'
import Suggestion from './Suggestion';
import Infosection from './Infosection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Statusbar from './Statusbar';
import Mainpage from './Mainpage';

const Home = () => {
  return (
    <Row>
    <Col lg={8}>
        <Row>
          <Col lg={2}>
          </Col>
          <Col lg={8}>
          <Statusbar/>
          <Mainpage/>
          </Col>
          <Col lg={2}>
          </Col>
          
        </Row>
    </Col>
    <Col lg={4}>
       <Infosection/>
       <Suggestion/>
    </Col>
  </Row>
  )
}

export default Home