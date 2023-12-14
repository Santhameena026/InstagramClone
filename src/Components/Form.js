import React from 'react'
import instafont from './instafont.png';
import facebookicon from './facebookicon.png'
import signupimg from './signupimg.png';
import googleplayimg from './googleplayimg.png';
import getitfrom  from './getitfrom.png';
import {Link} from 'react-router-dom';

const Form = () => {
  return (
    <div>
       <form action="/action_page.php" className='signupform mt-3 '>
         <div className='text-center'><img src={instafont} width="180px"/></div>
         
         <div>
            <p className='text-center m-1 text '>Sign up to see photos and videos <span>from your friends</span></p>
        </div>

        <div className='text-center'><button className='w-100 p-1 btn btn-primary facebookbtn mt-2'>
            <img src={facebookicon} className="m-1" width='17px' height='15px'/>Log in with Facebook</button>
        </div>

        <div className='or'> 
            <div className='linebefore'></div>
            <div className='orgap'>OR</div>
            <div className='lineafter'></div>
        </div>

         <div className="mobile ">
           <input type="email" className='w-100 p-2' id="email" placeholder="Mobile Number or Email" name="email"/>
        </div>
        <div className="fullname ">
           <input type="password" className="w-100 p-2" id="pwd" placeholder="Full Name" name="pswd"/>
        </div>
        <div className="username ">
           <input type="password" className="w-100 p-2"  id="pwd" placeholder="Username" name="pswd"/>
        </div>
        <div className="password ">
           <input type="password" className="w-100 p-2"  id="pwd" placeholder="Password" name="pswd"/>
        </div>

        <div>
            <p className='peopleinfo text-center'>People who use our service may have uploaded your contact information to Instagram.<span className='learnmore'> Learn More</span></p>
        </div>
        
       <div>
        <p className='privacy text-center'>By signing up, you agree to our <span className='policy'>Terms , Privacy Policy</span> and <span className='policy'>Cookies Policy .</span></p>
       </div>
  
         <Link to="/home"><button type="submit" className="signupbtn w-100">Sign up</button></Link>
      </form>

      

      <div className='have_an_account d-flex justify-content-center'>
         <div>
             <p className='text-center '>Have an account? <span className='loginlink' style={{textDecoration:"none"}}><Link to="/">Log in</Link></span></p>
         </div>
      </div>

          <p className='text-center' style={{fontSize:'14px'}}>Get the app.</p>

          <div className='text-center'>
            <img src={signupimg} width="270px"/>
          </div>

      
    </div>
  )
}

export default Form