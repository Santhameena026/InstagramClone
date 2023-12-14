import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import instafont from './instafont.png';
import './loginform.css';
import facebookimg from './facebookimg.png'
import signupimg from './signupimg.png';
import {Link} from 'react-router-dom';

const Loginform = () => {
  return (
    <div>
        <Container fluid>
         <Row>
            <Col></Col>
            <Col>
              <div className='mt-3'>
               <img src="https://i.imgur.com/P3Vm1Kq.png" width="400px" height="600px"/></div>
            </Col>
            <Col>
              <div className='mt-5'>
                <form action="/action_page.php" className='loginform mt-3 '>
                  <div className='text-center'><img src={instafont} width="180px"/></div>

                  <div className="mobile mt-4">
                   <input type="email" className='w-100 p-2' id="email" placeholder="Phone Number,username or email" name="email"/>
                  </div>
                  <div className="fullname ">
                  <input type="password" className="w-100 p-2" id="pwd" placeholder="Password" name="pswd"/>
                  </div>

                  <div className='mt-3'><Link to="/home"><button type="submit" className="loginbtn w-100">Log in</button></Link></div>

                  <div className='or'> 
                   <div className='linebefore'></div>
                   <div className='orgap'>OR</div>
                   <div className='lineafter'></div>
                  </div>

                  <div className='text-center'>
                    <div><img src={facebookimg} className="m-1" width='17px' height='15px'/>
                    <span style={{fontSize:"14px",color:"rgb(36, 36, 180)",fontWeight:"500"}}>Log in with Facebook</span></div>
                  </div>

                  <div className='text-center mt-3'>
                    <p style={{fontSize:"12px",color:"deepblue"}}>Forgot password?</p>
                  </div>
                </form>

                <div className=' dont_have_an_account d-flex justify-content-center'>
                     <div>
                      <p className='text-center'>Don't have an account? <span className='signuplink'><Link to="/signup">Sign up</Link></span></p>
                    </div>
               </div>

               <p className='text-center' style={{fontSize:'14px'}}>Get the app.</p>

               <div className='text-center'>
               <img src={signupimg} width="270px"/>
              </div>

              </div>
            </Col>
            <Col></Col>
         </Row>
        </Container>
    </div>
  )
}

export default Loginform