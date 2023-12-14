
import './App.css';
//import Homepage from './Components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './Components/Loginform';
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import './Components/Sidenav.css';
import {Routes,Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidenav from './Components/Sidenav';
import Explore from './Components/Explore';
import Reels from './Components/Reels';
import Profile from './Components/Profile';
import Messagepage from './Components/Messagepage'
import { useState } from 'react';
//import Profilepage from './Components/Profilepage';


function App() {
  

  return (

  
    <div className="App">
   
    <Container fluid>
      
      
      
       
       <Routes> 
        <Route path="/" element={<Loginform/>}/> 
         <Route path='/home' element={<Homepage/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/explore' element={<Explore/>}/>
         <Route path="/reels" element={<Reels/>}/>
         
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
      
   
   

    </Container>
     

    </div>
  );
}

export default App;
