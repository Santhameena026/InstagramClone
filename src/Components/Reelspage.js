import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiHeart} from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import save from './save.png';
import reelimg1 from './reelimg1.png';
import { HiDotsHorizontal } from "react-icons/hi";
import './reelspage.css';

const Reelspage = () => {
  return (
    <div className='mt-5'>
       <Row>
        <Col></Col>
        <Col>
           <Row>
            <Col lg={11}>
                <div><iframe style={{borderRadius:"5px"}} width="350" height="630" src="https://www.youtube.com/embed/ENPfSOcchV8" title="heating up on the street // don‘t do this at home" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </Col>
            <Col lg={1}>
             <div  className='reelicons'> 
                <div>
                    <div><FiHeart style={{fontSize:"23px"}}/></div>
                    <div><p style={{fontSize:"13px"}}>903K</p></div>
                </div>
                <div>
                    <div><FaRegComment style={{fontSize:"23px"}} /></div>
                    <div><p style={{fontSize:"13px"}}>1853</p></div>
                </div>
                <div> 
                     <div><FiSend  style={{fontSize:"23px"}}/></div>
                </div>
                <div>
                    <div style={{marginTop:"23px"}}><img src={save} width="30px" height="30px"/></div>
                </div>
                <div>
                    <div><HiDotsHorizontal style={{fontSize:"20px",marginTop:"20px",marginLeft:"5px"}}/></div>
                </div>
                <div>
                    <div><img src={reelimg1} width="30px" height="30px" style={{marginTop:"23px"}}/></div>
                </div>
             </div>   
              </Col>
            </Row>

            
            <div className='mt-3'>
            <Row>
               <Col lg={11}>
                <div><iframe style={{borderRadius:"5px"}} width="350" height="630" src="https://www.youtube.com/embed/dda7WdWLYhU" title="kuppailaye irunga #soundsettai #comedy #kuppai #mechanic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </Col>
            <Col lg={1}>
             <div  className='reelicons'> 
                <div>
                    <div><FiHeart style={{fontSize:"23px"}}/></div>
                    <div><p style={{fontSize:"13px"}}>903K</p></div>
                </div>
                <div>
                    <div><FaRegComment style={{fontSize:"23px"}} /></div>
                    <div><p style={{fontSize:"13px"}}>1853</p></div>
                </div>
                <div> 
                     <div><FiSend  style={{fontSize:"23px"}}/></div>
                </div>
                <div>
                    <div style={{marginTop:"23px"}}><img src={save} width="30px" height="30px"/></div>
                </div>
                <div>
                    <div><HiDotsHorizontal style={{fontSize:"20px",marginTop:"20px",marginLeft:"5px"}}/></div>
                </div>
                <div>
                    <div><img src={reelimg1} width="30px" height="30px" style={{marginTop:"23px"}}/></div>
                </div>
             </div>   
              </Col>
            </Row>
            </div>
          
            
            
            <div className='mt-3'>
            <Row>
               <Col lg={11}>
                <div><iframe width="350" height="630" style={{borderRadius:"5px"}} src="https://www.youtube.com/embed/lqrhgdQBF_4" title="Amazing peeling skills ripe pomegranate fruit #shorts #food" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </Col>
            <Col lg={1}>
             <div  className='reelicons'> 
                <div>
                    <div><FiHeart style={{fontSize:"23px"}}/></div>
                    <div><p style={{fontSize:"13px"}}>903K</p></div>
                </div>
                <div>
                    <div><FaRegComment style={{fontSize:"23px"}} /></div>
                    <div><p style={{fontSize:"13px"}}>1853</p></div>
                </div>
                <div> 
                     <div><FiSend  style={{fontSize:"23px"}}/></div>
                </div>
                <div>
                    <div style={{marginTop:"23px"}}><img src={save} width="30px" height="30px"/></div>
                </div>
                <div>
                    <div><HiDotsHorizontal style={{fontSize:"20px",marginTop:"20px",marginLeft:"5px"}}/></div>
                </div>
                <div>
                    <div><img src={reelimg1} width="30px" height="30px" style={{marginTop:"23px"}}/></div>
                </div>
             </div>   
              </Col>
            </Row>
            </div>

        </Col>
        <Col></Col>
       </Row>
    </div>
  )
}

export default Reelspage