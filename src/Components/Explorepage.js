import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Explorepage = () => {
  return (
    <div className='mt-4'>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
             <div>
                <Row>
                    <div></div>
                    <Col><iframe width="310" height="310" src="https://www.youtube.com/embed/ugJ7TETZnn0?si=-IrscJFXrV5ejBvX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                    <Col><iframe width="310" height="310" src="https://www.youtube.com/embed/5FM4RLSs4Us?si=Fcd1db1kd4q1jto6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                    <Col><img width="310" height="310" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY_93yFO60VIGbi0F0GJmdovb_5hkds-IUw&usqp=CAU'/></Col>
                </Row>
                <Row className='mt-3'>
                    <Col><iframe width="490" height="280" src="https://www.youtube.com/embed/DtRT_yrM0Ig?si=GXZjWbssopVr-aCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                    <Col><img width="230" height="280" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWjTTCTO92FICg53F-AH_XENlcWKeeKDbCw&usqp=CAU'/></Col>
                    <Col><img width="220" height="280" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVIrelFSVB3NocEDAAm0eGMZOL3BCSQPdQA&usqp=CAU'/></Col>
                </Row>
                <Row className='mt-3'>
                    <Col><iframe width="310" height="310" src="https://www.youtube.com/embed/ajdRvxDWH4w?si=F-DEmuRvWD5Q__op" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                    <Col><iframe width="310" height="310" src="https://www.youtube.com/embed/jVgAiz0AcF8?si=SVy0wU1adeIK9Mo2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                    <Col><img width="310" height="310" src='https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600'/></Col>
                </Row>    
             </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
        
    </div>
  )
}

export default Explorepage