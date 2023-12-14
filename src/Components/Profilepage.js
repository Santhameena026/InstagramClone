import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image5 from './image5.jpg';
import options  from './options.png';
import story1 from './story1.jpeg';
import story2 from './story2.jpeg';
import story3 from './story3.jpeg';
import storynew from './storynew.png';
import grid from './grid.png';
import reels from './reels.png';
import save from './save.png';
import tagged from './tagged.png';

const Profilepage = () => {
  return (
    <main>    
      <div>
        <Row>
            <Col lg={4}>
                <div className='profilepic'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98ssYkUVICiio1xq9-a8w2M0eBY06IBj0OA&usqp=CAU' alt='profilepic' style={{borderRadius:'50%',height:'160px',width:'160px'}}/>
                </div>
            </Col>
            <Col lg={8}>
                <section>
                    <div className='profilename'>
                        <p className='profiletext'>p.santhameena</p>
                        <button className='editprofile'>Edit Profile</button>
                        <button className='viewarchive'>View archive</button>
                        <img src={options}  className='optionsimg'/>
                    </div>

                    <div className='profilepara'>
                        <p className='paraposts'>50 posts</p>
                        <p className='parafollowers'>300 followers</p>
                        <p className='parafollowing'>350 following</p>
                    </div>

                    <div>
                        <p className='proname'>Santhameena</p>
                    </div>
                </section>
            </Col>
        </Row>

        <div className='story'>
            <div><img src={story1} className='story1'/><p style={{fontSize:"14px",fontWeight:"600",marginLeft:'65px',marginTop:"4px"}}>Bhavani</p></div>
            <div><img src={story2} className='story2'/><p style={{fontSize:"14px",fontWeight:"600",marginLeft:'61px',marginTop:"4px"}}>Hyderbad</p></div>
            <div><img src={story3} className='story2'/><p style={{fontSize:"14px",fontWeight:"600",marginLeft:'69px',marginTop:"4px"}}>Flower</p></div>
            <div><img src={storynew} className='story3'/><p style={{fontSize:"14px",fontWeight:"600",marginLeft:'77px',marginTop:"4px"}}>New</p></div>
        </div>

        <div><hr></hr></div>

        <div>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6} className='options'>
                    <Row>
                        <Col><img src={grid} style={{width:'11px',height:'11px',marginRight:'5px'}}/><span className='upload'>POSTS</span></Col>
                        <Col><img src={reels} style={{width:'11px',height:'11px',marginRight:'5px'}}/><span className='upload'>REELS</span></Col>
                        <Col><img src={save} style={{width:'15px',height:'15px',marginRight:'5px'}}/><span className='upload'>SAVED</span></Col>
                        <Col><img src={tagged} style={{width:'15px',height:'15px',marginRight:'5px'}}/><span className='upload'>TAGGED</span></Col>
                    </Row>

                </Col>
                <Col lg={3}></Col>
               
            </Row>

        </div>

        <div className='mt-4'>
            <Row>
                <Col lg={4} ><img src={image5} width='300px' height='280px'/></Col>
                <Col lg={4}><img src={image5} width='300px' height='280px'/></Col>
                <Col lg={4}><img src={image5} width='300px' height='280px'/></Col>
            </Row>
        </div>

      </div>
     
    </main>

  )
}

export default Profilepage