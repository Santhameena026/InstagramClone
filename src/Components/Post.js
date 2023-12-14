import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './post.css';
import Avatar from '@material-ui/core/Avatar';
import instastoryedit from './instastoryedit.png';
import instapostedit from './instapostedit.png';
import image5 from './image5.jpg';

import sendicon from './sendicon.png'
import comment from './comment.png';
import messages from './messages.png'
import save from './save.png';
import {FiHeart} from "react-icons/fi";


const Post = (props) => {
  return (
    <Row>
       <Col lg={1}></Col> 
       <Col lg={11}>
     <div className='post_container mt-3'>
        {/*Header*/}
      
       <div className='post_header'>
          <Avatar className='post_image' src={image5} />
          <div className='post_more'>
          <div className='post_username'>{props.username}</div>
          <p className='post_dot'>...</p>
          </div> 
          
       </div>
       
        {/*Image */}
       <div>
          <img src={props.image} width='100%' />
       </div>
       
       {/*Analytics*/}
       <div>
          <div>
            <span><FiHeart className='heart'/></span>
            <img src={comment} className='comment' />
            <img src={sendicon} className='messages'/>
            <img src={save} className='save'/>
          </div>
          <div className='like'>{props.like}</div>
       </div>
       {/*Comment*/}
       <div>
         <input type='text' className='addcomment' placeholder='Add a comment...'/>
       </div>
     </div>
       </Col>
    
      
    </Row>
  )
}

export default Post