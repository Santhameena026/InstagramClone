import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from './Sidenav';
import './Homepage.css';



const Messagepage = () => {
  return (
    <div>
        
        <Row>
            <Col lg={2} className=''><Sidenav/></Col>
            <Col lg={4} className='navlineexplore' style={{borderLeft: "1px solid grey",height:"1000px"}}>
           
            </Col>
        </Row>
        
    </div>
  )
}

export default Messagepage