import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center mt-4'>
            <div className='slider-area d-none d-md-block'></div>
              <div className='login-area'>
                <div className='card'>
                <div className='d-flex justify-content-center'>
                <div className='logo mt-4'></div>
                </div>
                
                <div className='form-area  ps-5 pe-5 pt-5 pb-4'>
                    <input type='text' className='form-control mb-2' placeholder='phone number,username or email' id='entername'/>
                    <input type='password' className='form-control mb-3'/>
                    <button type='button' className='btn btn-primary w-100 '>Log in</button>
                    <p id='or' className='text-center mt-2'>or</p>
                </div>
                </div>
              </div>

        </div>
       
    </div>
  )
}

export default Login