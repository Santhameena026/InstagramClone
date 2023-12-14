import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import image5 from './image5.jpg';
import './Infosection.css';

const Infosection = () => {
  return (
    <div>
       <div className='info_container'>
            <Avatar src={image5} className='info_image'/>
            <div className='info_follow'> 
               <div className='info_switch'>
                   <div>
                      <div style={{fontSize:"14px",fontWeight:"630"}}>g.sarveshwaran</div>
                      <div style={{fontSize:"14px",color:"grey"}}>sarvesh meena</div>
                   </div>  
                    <div className='switch'>Switch</div>
                   
                </div>
            </div>

        </div>
    </div>
  )
}

export default Infosection