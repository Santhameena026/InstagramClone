import React from 'react'
import instafont from './instafont.png';
import reels from './reels.png';
import { GoHomeFill } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import {FiHeart} from "react-icons/fi";
import {FiPlusSquare} from "react-icons/fi";
import Avatar from '@material-ui/core/Avatar';
import image5 from './image5.jpg';
import './Sidenav.css';
import drag from './drag.png';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiSend } from "react-icons/fi";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import More from './More';
import { useNavigate } from 'react-router-dom';


const Sidenav = () => {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const navigate =useNavigate();
  return (
   <div className='sideborder fixed_left'>
   <nav class="navbar">
    <ul className="navbar-nav">
          <li className="nav-item mt-4">
            <a className="nav-link" href="#"><img src={instafont} width ='140px' height='45px'/></a>
          </li>
         <li className="nav-item libgcolor">
            <Link to='/home'> <button className= "homebtn" ><span style={{fontSize:'25px',marginRight:'20px',color:'black',marginLeft:"3px"}}><GoHomeFill/></span>Home</button></Link>
         </li>
        
        
        
         <li className="nav-item libgcolor mt-3">
         <button className=" searchbtn" data-bs-toggle="offcanvas" data-bs-target="#search"><span style={{fontSize:'25px',marginRight:'18px',color:'black',marginLeft:"4px"}}><GrSearch/></span>Search</button>
         <div className="offcanvas offcanvas-start" id="search" style={{borderRadius:"0px 20px 20px 0px"}}>
          <div className="offcanvas-header">
          <h4 className="offcanvas-title">Search</h4>
          </div>
          <div className="offcanvas-body">
            <span className='searchoff'><GrSearch style={{color:'grey'}}/></span>
            <input type='text' className='w-100 searchinput' placeholder='Search'/>
            <div className='mt-4'><hr></hr></div>
            <p style={{fontSize:"14px",color:"grey",textAlign:"center",fontWeight:"600",marginTop:"220px"}}>No recent searches.</p>
          </div>
          </div>
         </li>
        
         <li className="nav-item libgcolor mt-3">
            <button  className=" explorebtn" onClick={() => navigate('/explore')} style={{color:'black'}}><span style={{fontSize:'25px',marginRight:'20px',color:'black',marginLeft:"5px"}}><MdOutlineExplore/></span>Explore</button>
         </li>
         <li className="nav-item libgcolor mt-3">
           <Link to='/reels'><button className=' reelsbtn'  style={{color:'black'}}><span style={{fontSize:'25px',marginRight:'20px',marginLeft:'9px'}}><img src={reels} width='20px'/></span>Reels</button></Link>
         </li>
        
        
         <li className="nav-item libgcolor mt-3">
            <button  style={{color:'black'}} className=" messagebtn"  data-bs-toggle="offcanvas" data-bs-target="#message"><span style={{fontSize:'25px',marginRight:'18px',marginLeft:"4px"}}><FiSend/></span>Messages</button>
            <div className="offcanvas offcanvas-start" id="message">
              <div className="offcanvas-header">
              <h4 className="offcanvas-title mt-3" style={{fontWeight:"650"}}>santhameena<span style={{fontSize:"17px",marginLeft:"5px"}}><IoIosArrowDown /></span></h4><span style={{fontSize:"25px"}}> <FaRegEdit /></span>
              </div>
              <div className="offcanvas-body">
                  <div className='messagereq' ><p style={{fontWeight:"700"}}>Messages</p><p style={{fontWeight:"600",color:"grey"}}>Requests</p></div> 
                  <div className='message_friends'>
                      <Avatar src={image5} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"16px",fontWeight:"500",marginLeft:"10px"}}>suganthi</div>
                           <div style={{fontSize:"14px",fontWeight:"700",marginLeft:"10px"}}>suganthi sent an attachment...<span style={{color:"grey",fontWeight:"100",marginLeft:"6px"}}>3 d</span></div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={image5} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Priyadharshini pandiyaraja</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>Active 9 h ago</div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={image5} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>dr Vinodhini B.H.M.S</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>dr sent an attachment.  15 w</div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={image5} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Farheen Simi</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>Active 5 h ago</div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={image5} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Ruthraraja Sivaram</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>Sivaram shared a story.  34 w</div>
                        </div>
                      </div>
                  </div> 

                  <div className='message_friends'>
                      <Avatar src={image5} className='message_image'/>
                      <div className='message_username'>
                        <div>
                           <div style={{fontSize:"15px",fontWeight:"500",marginLeft:"10px"}}>Dharshini</div>
                           <div style={{fontSize:"13px",color:"grey",marginLeft:"10px"}}>You shared a story.  44w</div>
                        </div>
                      </div>
                  </div> 


              </div>
           </div>

         </li>
         
         <li className="nav-item libgcolor mt-3">
            <button className=" notificationbtn" data-bs-toggle="offcanvas" data-bs-target="#notification"><span style={{fontSize:'25px',marginRight:'20px',marginLeft:"4px",color:'black'}}><FiHeart/></span>Notifications</button>
            <div className="offcanvas offcanvas-start" id="notification">
               <div className="offcanvas-header">
                  <h4 className="offcanvas-title" style={{fontWeight:"650"}}>Notifications</h4>
                 
               </div>
               <div classname="offcanvas-body">
                 <div className='notify_friends'>
                      <Avatar src={image5} className='notify_image'/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>Follow request</div>
                           <div style={{fontSize:"14px",color:"grey"}}>karthiga1997 </div>
                        </div>
                        <div> <IoIosArrowForward  style={{fontSize:'20px',color:"grey",marginLeft:"170px"}}/></div>
                     </div>
                </div> 

                <div><hr></hr></div>

                <p style={{fontWeight:"700",marginLeft:"17px",fontSize:"17px"}}>Today</p>

                <div className='notify_friends'>
                      <Avatar src={image5} className='notify_image' style={{border:"3px solid crimson"}}/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>nasrin_123</div>
                           <div style={{fontSize:"14px",color:"grey"}}>Siva and 2 others follow them</div>
                        </div>
                        <div style={{marginLeft:"30px"}}> <button type='button' className='btn btn-primary' style={{borderRadius:"10px",width:"80px",height:"35px"}}>Follow</button></div>
                     </div>
                </div> 

                <div><hr></hr></div>

                
                <p style={{fontWeight:"700",marginLeft:"17px",fontSize:"17px"}}>Yesterday</p>
                <div className='notify_friends'>
                      <Avatar src={image5} className='notify_image' style={{border:"3px solid crimson"}}/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>aalvina_anu</div>
                           <div style={{fontSize:"14px",color:"grey"}}> post a reel .1d</div>
                        </div>
                        <div style={{marginLeft:"150px"}}> <img src={image5} alt='user' width='40px' height="40px"/></div>
                     </div>
                </div> 

                <div className='notify_friends'>
                      <Avatar src={image5} className='notify_image' style={{border:"3px solid crimson"}}/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>aalvina_anu</div>
                           <div style={{fontSize:"14px",color:"grey"}}> post a reel .1d</div>
                        </div>
                        <div style={{marginLeft:"150px"}}> <img src={image5}  alt='user' width='40px' height="40px"/></div>
                     </div>
                </div> 

                <div><hr></hr></div>

                <p style={{fontWeight:"700",marginLeft:"17px",fontSize:"17px"}}>This week</p>

                <div className='notify_friends'>
                      <Avatar src={image5} className='notify_image' style={{border:"3px solid crimson"}}/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>aalvina_anu</div>
                           <div style={{fontSize:"14px",color:"grey"}}> post a reel .1d</div>
                        </div>
                        <div style={{marginLeft:"150px"}}> <img src={image5} alt='user' width='40px' height="40px"/></div>
                     </div>
                </div> 

                <div className='notify_friends'>
                      <Avatar src={image5} alt='user' className='notify_image' style={{border:"3px solid crimson"}}/>
                      <div className='notify_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"700"}}>devi_karthi</div>
                           <div style={{fontSize:"14px",color:"grey"}}>requested to...</div>
                        </div>
                        <div style={{marginLeft:"35px"}}> <button type='button' className='btn btn-primary' style={{borderRadius:"10px",width:"80px",height:"35px"}}>Confirm</button>
                        <span style={{marginLeft:"10px"}}><button type='button' className='btn ' style={{borderRadius:"10px",width:"80px",height:"35px",backgroundColor:"#dbdbdb"}}>Delete</button></span></div>
                     </div>
                </div> 
           
           </div>
           </div>

         </li>
         
         <li className='nav-item libgcolor mt-3' >
        
         
         <button className="createbutton" onClick={handleShow}> <span  style={{fontSize:"25px",marginRight:'18px',marginLeft:"5px"}}><FiPlusSquare/></span>Create</button>

        <Modal show={show} onHide={handleClose}>
         <Modal.Header >
         <Modal.Title style={{fontWeight:'bold',marginLeft:'170px',fontSize:"16px"}}>Create new Post</Modal.Title>
         </Modal.Header>
        <Modal.Body>
        <img src={drag} style={{marginTop:'120px',marginLeft:"140px"}}/>
        <p className='text-center fs-5'>Drag photos and videos here</p>
        <div className='text-center' style={{marginBottom:"130px"}}><button type="button" className="btn btn-primary">Select From Computer</button></div>
        </Modal.Body>
         </Modal>

         </li>
        
         
          <li className="nav-item  libgcolor mt-4">
            <button className=" d-flex profilebtn" onClick={() => navigate('/profile')}  ><span style={{marginLeft:"5px"}}><Avatar src={image5 } alt='profile' style={{width:'25px',height:'25px'}}/></span><span style={{marginLeft:"18px"}}>Profile</span></button>
         </li>
         
        
         <li className='nav-item moreitem'>
          <More/>
          
         </li>
      </ul>
      </nav>

   
      </div>

      
  )
}

export default Sidenav