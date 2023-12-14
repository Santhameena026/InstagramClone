import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './More.css';
import {HiOutlineMenu} from "react-icons/hi";
import options  from './options.png';
import { LuActivitySquare } from "react-icons/lu";
import save from './save.png';
import { FiSun } from "react-icons/fi";
import { VscReport } from "react-icons/vsc";
import {FaThreads} from "react-icons/fa6";
import {Link} from "react-router-dom";


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='container'>
          <button className="more_button"
            onClick={handleClick}
          >
            <HiOutlineMenu style={{fontSize:'25px',color:'black'}}/>
         
          <span className='text' style={{marginLeft:"14px",color:"black"}}>More</span>
        </button>

       
      <Menu className='menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 
          style: {
            backgroundColor: 'white', 
            color: 'black',
            padding: '12px',
            width:'250px',
            
          },
        }}

      >

        <MenuItem className='menuitem ' onClick={handleClose}>
            <span><img src={options} width="30px" height="30px"/></span><span style={{fontSize:"15px",fontWeight:"300",marginLeft:'10px'}}>Settings</span>
        </MenuItem>
        <MenuItem className='mt-2' onClick={handleClose}>
          <span style={{fontSize:"23px",marginLeft:"3px"}}><LuActivitySquare /></span> <span style={{fontSize:"15px",fontWeight:"300",marginLeft:'13px'}}>Your activity</span>
        </MenuItem>
        <MenuItem className='mt-2' onClick={handleClose}>
          <span><img src={save} width="25px" height="25px"/></span> <span style={{fontSize:"15px",fontWeight:"300",marginLeft:'13px'}}>Saved</span>
        </MenuItem>
        <MenuItem className='mt-2' onClick={handleClose}>
        <span style={{fontSize:"18px",marginLeft:"3px"}}><FiSun /></span> <span style={{fontSize:"15px",fontWeight:"300",marginLeft:'15px'}}>Switch appearance</span>
        </MenuItem>
        <MenuItem className='mt-2' onClick={handleClose}>
        <span style={{fontSize:"16px",marginLeft:"3px"}}><VscReport /></span> <span style={{fontSize:"15px",fontWeight:"300",marginLeft:'15px'}}>Report a problem</span>
        </MenuItem>
        <MenuItem className='p-3' onClick={handleClose}><span style={{fontSize:"15px",marginLeft:"3px"}}><FaThreads/></span><span style={{fontSize:"15px",fontWeight:"300",marginLeft:'15px'}}>Threads</span></MenuItem>
        <MenuItem className='p-3' onClick={handleClose}>
           <span style={{fontSize:"15px"}}> Switch accounts</span>
        </MenuItem>
        <MenuItem className='menuitem p-3' onClick={handleClose}>
           <Link to="/"> <button className='logout '> <span style={{fontSize:"15px"}}>Log out </span></button></Link>
        </MenuItem>
         
      </Menu>
      </div>
    
   
  );
}