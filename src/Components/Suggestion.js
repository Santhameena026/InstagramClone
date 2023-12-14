import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import image5 from './image5.jpg';
import './suggestion.css';

const Suggestion = () => {
  return (
    <div>
        <div className='suggest_container'>
            <div className='suggest_header'>
                 <div>Suggested for you</div>
                 <div className='suggest_all'>See All</div>
            </div>
            <div>
                <div className='suggest_body'>
                   
                    <div className='suggest_friends'>
                      <Avatar src={image5} className='suggest_image'/>
                      <div className='suggest_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"630"}}>testing_profile</div>
                           <div style={{fontSize:"14px",color:"grey"}}>Followed by meenamathi </div>
                        </div>
                        <div className='follow'>Follow</div>
                      </div>
                    </div>  

                    <div className='suggest_friends'>
                      <Avatar src={image5} className='suggest_image'/>
                      <div className='suggest_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"630"}}>testing_profile</div>
                           <div style={{fontSize:"14px",color:"grey"}}>Followed by meenamathi </div>
                        </div>
                        <div className='follow'>Follow</div>
                      </div>
                    </div>  

                    <div className='suggest_friends'>
                      <Avatar src={image5} className='suggest_image'/>
                      <div className='suggest_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"630"}}>testing_profile</div>
                           <div style={{fontSize:"14px",color:"grey"}}>Followed by meenamathi </div>
                        </div>
                        <div className='follow'>Follow</div>
                      </div>
                    </div>  

                    <div className='suggest_friends'>
                      <Avatar src={image5} className='suggest_image'/>
                      <div className='suggest_username'>
                        <div>
                           <div style={{fontSize:"14px",fontWeight:"630"}}>testing_profile</div>
                           <div style={{fontSize:"14px",color:"grey"}}>Followed by meenamathi </div>
                        </div>
                        <div className='follow'>Follow</div>
                      </div>
                    </div>  

                      

                     

                     

                </div>

            </div>
        </div>
    </div>
  )
}

export default Suggestion